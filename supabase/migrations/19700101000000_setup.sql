create table
  public.my_test (
    id uuid default gen_random_uuid () primary key,
    title text not null,
    created_at timestamptz default now ()
  );

alter policy "Enable read for authenticated users only" on "public"."my_test" to authenticated using (
  (SELECT auth.uid()) IS NOT NULL
);

-- Remove all privileges from the anon role.
REVOKE ALL PRIVILEGES ON DATABASE "postgres"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON SCHEMA "public"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON SCHEMA "storage"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA "public"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA "storage"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA "public"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA "storage"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA "public"
FROM
  "anon";

REVOKE ALL PRIVILEGES ON ALL TABLES IN SCHEMA "storage"
FROM
  "anon";