src_res = gnome.compile_resources('org.example.Application.src',
  'org.example.Application.src.gresource.xml',
  gresource_bundle: true,
  install: true,
  install_dir: pkgdatadir,
)

bin_conf = configuration_data()
bin_conf.set('GJS', find_program('gjs').path())
bin_conf.set('PACKAGE_VERSION', meson.project_version())
bin_conf.set('PACKAGE_NAME', meson.project_name())
bin_conf.set('prefix', get_option('prefix'))
bin_conf.set('libdir', join_paths(get_option('prefix'), get_option('libdir')))
bin_conf.set('datadir', join_paths(get_option('prefix'), get_option('datadir')))

configure_file(
  input: 'org.example.Application.in',
  output: 'org.example.Application',
  configuration: bin_conf,
  install: true,
  install_dir: get_option('bindir')
)

run_target('run',
  command: join_paths(meson.build_root(), 'src', 'org.example.Application'),
  depends: [
    src_res,
    data_res,
  ]
)