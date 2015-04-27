/*
Created by Mohammed Aljuboori for Pinegrow Web Editor
Licensed under MIT license
Feel free to use the code in your own Pinegrow plugins
Website http://mhdaljuboori.me
Twitter @MhdAljuboori
 */
$(function() {

  //Wait for Pinegrow to wake-up
  $("body").one("pinegrow-ready", function(e, pinegrow) {

    //Create new Pinegrow framework object
    var f = new PgFramework("EmailPlugin", "EmailCreator");

    var rowContainer = new PgComponentType('emailcreator.row-container', 'Row Container');
    rowContainer.selector = '.row-container';
    rowContainer.code = '<table cellpadding="0" cellspacing="0" width="100%" class="row-container">\
      <tbody>\
        <tr>\
          <td width="600" class="pg-empty-placeholder">\
          </td>\
        </tr>\
      </tbody>\
    </table>';
    rowContainer.tags = 'major';
    f.addComponentType(rowContainer);


    var containerContent = new PgComponentType('emailcreator.container-contant', 'Container Content');
    containerContent.selector = '.container-content';
    containerContent.code = '<table align="center" cellpadding="0" cellspacing="0" width="600" class="container-content">\
      <tbody>\
        <tr>\
          <td class="pg-empty-placeholder">\
          </td>\
        </tr>\
      </tbody>\
    </table>';
    containerContent.tags = 'major';
    f.addComponentType(containerContent);


    var container = new PgComponentType('emailcreator.container', 'Container');
    container.selector = '.container-content';
    container.code = '<table cellpadding="0" cellspacing="0" class="container">\
      <tbody>\
        <tr>\
          <td class="pg-empty-placeholder">\
          </td>\
        </tr>\
      </tbody>\
    </table>';
    container.tags = 'major';
    f.addComponentType(container);


    var row = new PgComponentType('emailcreator.row', 'Row');
    row.selector = '.row';
    row.code = '<tr width="100%" class="row pg-empty-placeholder"></tr>';
    row.sections = {
      'emailcreator.row' : {
        name : 'Row options',
        fields : {
          'emailcreator.row.bg-color' : {
            type : 'color',
            name : 'Background Color',
            live_update: true,
            action : 'custom',
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              return pgel.attr('bgcolor');
            },
            set_value: function(obj, value) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              pgel.attr('bgcolor', value);
              return value;
            }
          },
          'emailcreator.row.width' : {
            type : 'text',
            name : 'Width',
            live_update: true,
            action : 'custom',
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              return pgel.attr('width');
            },
            set_value: function(obj, value) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              pgel.attr('width', value);
              return value;
            }
          }
        }
      }
    };
    row.tags = 'major';
    f.addComponentType(row);


    var column = new PgComponentType('emailcreator.column', 'Column');
    column.selector = '.column';
    column.code = '<td class="column pg-empty-placeholder"></td>';
    column.sections = {
      'emailcreator.column' : {
        name : 'Column options',
        fields : {
          'emailcreator.column.width' : {
            type : 'select',
            name : 'Column width',
            options: [
              {key: "8.33333333%",   name: "Column 1"},
              {key: "16.66666667%",  name: "Column 2"},
              {key: "25%",           name: "Column 3"},
              {key: "33.33333333%",  name: "Column 4"},
              {key: "41.66666667%",  name: "Column 5"},
              {key: "50%",           name: "Column 6"},
              {key: "58.33333333%",  name: "Column 7"},
              {key: "66.66666667%",  name: "Column 8"},
              {key: "75%",           name: "Column 9"},
              {key: "83.33333333%",  name: "Column 10"},
              {key: "91.66666667%",  name: "Column 11"},
              {key: "100%",          name: "Column 12"}
            ],
            live_update: true,
            action : 'custom',
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              return pgel.attr('width');
            },
            set_value: function(obj, value) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              pgel.attr('width', value);
              return value;
            }
          }
        }
      }
    };
    column.tags = 'major';
    f.addComponentType(column);


    var divider = new PgComponentType('emailcreator.divider', 'Divider');
    divider.selector = '.divider';
    divider.code = '<tr width="100%" bgcolor="black" align="center" class="divider">\
      <td></td>\
    </tr>';
    divider.tags = 'major';
    f.addComponentType(divider);


    var rowElm = new PgComponentType('emailcreator.row-elm', 'Row Element');
    rowElm.selector = 'tr';
    rowElm.display_name = 'tag';
    rowElm.code = '<tr class="pg-empty-placeholder"></tr>';
    rowElm.sections = {
      'emailcreator.row-elm' : {
        name : 'Row element options',
        fields : {
          'emailcreator.row-elm.bg-color' : {
            type : 'color',
            name : 'Background Color',
            live_update: true,
            action : 'custom',
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              return pgel.attr('bgcolor');
            },
            set_value: function(obj, value) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              pgel.attr('bgcolor', value);
              return value;
            }
          }
        }
      }
    };
    f.addComponentType(rowElm);


    var everything = new PgComponentType('emailcreator.everything', 'Element');
    everything.selector = '*';
    everything.display_name = 'tag';
    everything.sections = {
      'emailcreator.everything' : {
        name : 'General options',
        fields : {
          'emailcreator.everything.align' : {
            type : 'select',
            name : 'Align',
            live_update: true,
            show_empty: true,
            options: [
              {key: 'right', name: 'Right'},
              {key: 'left', name: 'Left'},
              {key: 'center', name: 'Center'}
            ],
            action : 'custom',
            get_value: function(obj) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              return pgel.attr('align');
            },
            set_value: function(obj, value) {
              var $el = obj.data;
              var pgel = new pgQuery($el);
              pgel.attr('align', value);
              return value;
            }
          }
        }
      }
    };
    f.addComponentType(everything);


    //Tell Pinegrow about the framework
    pinegrow.addFramework(f);

    var libsection = new PgFrameworkLibSection("MaterializePinegrowPlugin_lib", "Components");
    //Pass components in array
    libsection.setComponentTypes([rowContainer, containerContent, container, row, column, divider]);

    f.addLibSection(libsection);

  });

});