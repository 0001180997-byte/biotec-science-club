-- Function to automatically create admin profile when user signs up
create or replace function public.handle_new_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.admin_profiles (id, email, full_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'full_name', new.email)
  )
  on conflict (id) do nothing;
  
  return new;
end;
$$;

-- Trigger to create admin profile on user creation
drop trigger if exists on_auth_admin_created on auth.users;

create trigger on_auth_admin_created
  after insert on auth.users
  for each row
  execute function public.handle_new_admin();
