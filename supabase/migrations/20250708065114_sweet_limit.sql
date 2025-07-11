/*
  # Fix user signup trigger

  1. Functions
    - Create or replace the handle_new_user function to automatically create profile entries
    - Extract full_name from user metadata and insert into profiles table

  2. Triggers
    - Create trigger on auth.users table to call handle_new_user on INSERT
    - Ensures profile is created automatically when user signs up

  3. Security
    - Function runs with security definer privileges to access auth schema
*/

-- Create or replace the function to handle new user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, avatar_url)
  VALUES (
    new.id,
    new.raw_user_meta_data->>'full_name',
    new.raw_user_meta_data->>'avatar_url'
  );
  RETURN new;
END;
$$;

-- Drop the trigger if it exists and recreate it
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create the trigger to automatically create a profile when a user signs up
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();