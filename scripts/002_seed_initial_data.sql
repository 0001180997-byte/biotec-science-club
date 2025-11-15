-- Insert initial home content
insert into public.home_content (hero_title, hero_subtitle, hero_description, about_text)
values (
  'Clube de Ciências BIOTEC',
  'Pesquisa e Extensão em Ciências Biológicas',
  'O Clube de Ciências BIOTEC é um projeto de extensão da UEMG que promove a divulgação científica e o ensino de ciências através de atividades práticas e teóricas.',
  'Somos um projeto de extensão universitária dedicado à promoção da educação científica e ao desenvolvimento de pesquisas na área de ciências biológicas.'
);

-- Insert sample team members
insert into public.team_members (name, role, bio, order_index)
values 
  ('Coordenador', 'Professor Coordenador', 'Coordenador do projeto de extensão', 1),
  ('Equipe', 'Pesquisadores', 'Membros da equipe de pesquisa', 2);

-- Insert sample projects
insert into public.projects (title, description, category, status, start_date)
values 
  ('Projeto de Exemplo', 'Descrição do projeto de pesquisa', 'Pesquisa', 'active', current_date);

-- Insert sample blog post
insert into public.blog_posts (title, excerpt, content, author, published, published_at)
values 
  ('Bem-vindo ao BIOTEC', 'Primeiro post do nosso blog', 'Conteúdo completo do primeiro post sobre o clube de ciências.', 'Equipe BIOTEC', true, now());
