const Gio = imports.gi.Gio;
const GLib = imports.gi.GLib;
const Gtk = imports.gi.Gtk;
const Lang = imports.lang;

const ApplicationWindow = new Lang.Class({
  Name: 'ApplicationWindow',
  Extends: Gtk.ApplicationWindow,
  Template: 'resource:///org/example/Application/ui/AppWindow.ui',

  _init: function() {
      log('AppWindow');
      this.parent();
  }
});