-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Home content table
create table if not exists public.home_content (
  id uuid primary key default uuid_generate_v4(),
  hero_title text not null,
  hero_subtitle text not null,
  hero_description text not null,
  about_text text not null,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Team members table
create table if not exists public.team_members (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  role text not null,
  bio text,
  image_url text,
  order_index integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Projects table
create table if not exists public.projects (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  category text not null,
  image_url text,
  status text default 'active',
  start_date date,
  end_date date,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Gallery images table
create table if not exists public.gallery_images (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  image_url text not null,
  category text,
  order_index integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Blog posts table
create table if not exists public.blog_posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  excerpt text not null,
  content text not null,
  author text not null,
  image_url text,
  published boolean default false,
  published_at timestamp with time zone,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Publications table
create table if not exists public.publications (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  authors text not null,
  journal text,
  year integer,
  doi text,
  url text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Partners table
create table if not exists public.partners (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  logo_url text,
  website_url text,
  description text,
  order_index integer default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security on all tables
alter table public.home_content enable row level security;
alter table public.team_members enable row level security;
alter table public.projects enable row level security;
alter table public.gallery_images enable row level security;
alter table public.blog_posts enable row level security;
alter table public.publications enable row level security;
alter table public.partners enable row level security;

-- Public read access for all tables
create policy "Allow public read access on home_content" on public.home_content for select using (true);
create policy "Allow public read access on team_members" on public.team_members for select using (true);
create policy "Allow public read access on projects" on public.projects for select using (true);
create policy "Allow public read access on gallery_images" on public.gallery_images for select using (true);
create policy "Allow public read access on published blog_posts" on public.blog_posts for select using (published = true);
create policy "Allow public read access on publications" on public.publications for select using (true);
create policy "Allow public read access on partners" on public.partners for select using (true);

-- Admin profiles table (references auth.users)
create table if not exists public.admin_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  full_name text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

alter table public.admin_profiles enable row level security;

-- Only admins can see admin profiles
create policy "Admins can view their own profile" on public.admin_profiles 
  for select using (auth.uid() = id);

create policy "Admins can update their own profile" on public.admin_profiles 
  for update using (auth.uid() = id);

-- Admin-only write access (must be authenticated)
create policy "Admins can insert home_content" on public.home_content for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update home_content" on public.home_content for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete home_content" on public.home_content for delete using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert team_members" on public.team_members for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update team_members" on public.team_members for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete team_members" on public.team_members for delete using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert projects" on public.projects for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update projects" on public.projects for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete projects" on public.projects for delete using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert gallery_images" on public.gallery_images for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update gallery_images" on public.gallery_images for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete gallery_images" on public.gallery_images for delete using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert blog_posts" on public.blog_posts for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update blog_posts" on public.blog_posts for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete blog_posts" on public.blog_posts for delete using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can view all blog_posts" on public.blog_posts for select using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert publications" on public.publications for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update publications" on public.publications for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete publications" on public.publications for delete using (auth.uid() in (select id from public.admin_profiles));

create policy "Admins can insert partners" on public.partners for insert with check (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can update partners" on public.partners for update using (auth.uid() in (select id from public.admin_profiles));
create policy "Admins can delete partners" on public.partners for delete using (auth.uid() in (select id from public.admin_profiles));
