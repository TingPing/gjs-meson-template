pkg.initGettext();
pkg.initFormat();
pkg.require({
  'Gdk': '3.0',
  'Gio': '2.0',
  'GLib': '2.0',
  'GObject': '2.0',
  'Gtk': '3.0'
});

const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const window = imports.window;


const MyApplication = new Lang.Class({
    Name: 'MyApplication',
    Extends: Gtk.Application,

    _init: function() {
        this.parent({ application_id: pkg.name });

        GLib.set_application_name(_("My JS Application"));
    },

    vfunc_startup: function() {
        this.parent();
        log(_("My JS Application started"));
    },

    vfunc_activate: function() {
        let win = new window.ApplicationWindow({ application: this });
        win.show();
    },

    vfunc_shutdown: function() {
        log(_("My JS Application exiting"));

        this.parent();
    }
});

function main(argv) {
    return (new MyApplication()).run(argv);
}