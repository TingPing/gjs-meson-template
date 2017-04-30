project('org.example.Application',
  version: '1.0',
  meson_version: '>= 0.39.0'
)

gnome = import('gnome')
i18n = import('i18n')
pkgdatadir = join_paths(get_option('datadir'), meson.project_name())

subdir('data')
subdir('po')
subdir('src')