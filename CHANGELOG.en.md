## History update record
##### Date Format YYYY-MM-DD

----------------

### 2019-08-06 v2.3.8
----------------
  - Fix the problem that a javascript statement in the href of the a tag causes a warning
  - merge PR [#560](https://github.com/margox/braft-editor/pull/560)，[#593](https://github.com/margox/braft-editor/pull/593)，[#588](https://github.com/margox/braft-editor/pull/588)，[#582](https://github.com/margox/braft-editor/pull/582)

### 2019-06-20 v2.3.7
----------------
  - Fix the problem [#542](https://github.com/margox/braft-editor/issues/542)、[#541](https://github.com/margox/braft-editor/issues/541)、[#467](https://github.com/margox/braft-editor/issues/467)
  - Fix the problem [#512](https://github.com/margox/braft-editor/issues/512) And add the imageResizable attribute, which allows you to turn off the dragging and resizing function of the picture.

### 2019-06-18 v2.3.6
----------------
  - Support directly inserting a link without selecting text
  - Added `allowInsertLinkText` property, which allows to enter link text when directly inserting a link, the default is `false`

### 2019-06-14 v2.3.5
----------------
  - Improve index.d.ts

### 2019-06-11 v2.3.4
----------------
  - Support the retention of some more custom html attributes (need to upgrade braft-convert to v2.3.0)
  - Added Korean (kr), Japanese (jpn), Turkish (tr)
  - Add more [hooks](https://www.yuque.com/braft-editor/be/gz44tn#gug9gs) support

### 2019-06-11 v2.3.3
----------------
  - Support the retention of some more custom html attributes (need to upgrade braft-convert to v2.1.13)
  - Add more [hooks](https://www.yuque.com/braft-editor/be/gz44tn#gug9gs) support

### 2019-05-28 v2.3.2
----------------
  - Fix the problem that the incoming RAW string cannot be parsed normally

### 2019-05-20 v2.3.1
----------------
  - Fix the fatal bug of v2.3.0

### 2019-05-20 v2.3.0
----------------
  - Support nested list and optimization of some internal details, thanks to [SyMind](https://github.com/SyMind) for your contribution:[PR#486](https://github.com/margox/braft-editor/pull/486),[PR#485](https://github.com/margox/braft-editor/pull/485)
  - Optimize the problem used in SSR

### 2019-04-29 v2.2.10
----------------
  - The picture supports dragging and resizing, thanks to [ArthasDragon](https://github.com/margox/braft-editor/pull/424) for your contribution!
  - Optimize the use of pure numbers to initialize the problem of abnormal content in the editor, thanks to [WzFFzW](https://github.com/margox/braft-editor/pull/446) for your contribution!
  - Added fixPlaceholder attribute (Boolean), used to fix the problem of abnormal placeholder text display in some cases, the default is false
  - Optimize forceRender

### 2019-03-06 v2.2.9
----------------
  - Modify index.d.ts
### 2019-02-22 v2.2.7

----------------
  - Added a template CSS file for beautifying the output HTML(`node_modules/braft-editor/dist/output.css`)

### 2019-02-22 v2.2.6
----------------
  - Optimize the blockRenerMap property, support passing in a function that returns the blockRenerMap object
  - Optimize the settings of superscript and subscript styles
  - Optimize the display effect of text indentation and text alignment in the editor when colleagues exist

### 2019-01-11 v2.2.4
----------------
  - Added editorId attribute, which has exactly the same function as id attribute. It is used to solve the problem that the id attribute in the Ant Design Form component will be overwritten and the extension module cannot be used normally.

### 2019-01-11 v2.2.2
----------------
  - Optimize the playback interaction of audio, video and embedded media, and change to play in the modal box

### 2019-01-06 v2.2.1
----------------
  - Improve index.d.ts ([PR#340](https://github.com/margox/braft-editor/pull/340))

### 2018-12-29 v2.2.0
----------------
 - Added the d.ts file, which is more user-friendly in TypeScript projects. Thanks to the contribution of [Lou Chuan Dao](https://github.com/weifuchuan)!
 - Fix the problem that the input box in the pop-up component cannot be used
 - Other optimizations and bug fixes:[Issue#336](https://github.com/margox/braft-editor/issues/336),[Issue#331](https://github.com/margox/braft-editor/issues/331),[Issue#328](https://github.com/margox/braft-editor/issues/328)

### 2018-12-24 v2.1.36
----------------
  - Fix the problem that pop-up components occasionally cannot be closed normally

### 2018-12-03 v2.1.34
----------------
  - Fix v2.1.32 **Optimized copy and paste in the editor**, causing the copy editor content to be pasted to other places abnormally

### 2018-11-30 v2.1.33
----------------
  - Optimize the display of DropDown components
  - Optimize the size of Switch components
  - Fix the problem of invalid font settings

### 2018-11-27 v2.1.32
----------------
  - Optimize the display of the image toolbar
  - Optimize copy and paste in the editor
  - Fixed an issue where some icons displayed abnormally in some cases
  - Fix other issues

### 2018-11-14 v2.1.29
----------------
  - Try to fix the problem that the page error is reported when inputting Chinese after selecting multiple lines of content [[#295](https://github.com/margox/braft-editor/issues/295)], relying on braft-utils@3.0.6
  - Added the triggerChangeOnMount property, which is used to specify whether to trigger onChange once after the editor component is loaded, the default is true
  - Fix the problem that the editor displays abnormally when the className attribute is passed in

### 2018-11-13 v2.1.28
----------------
  - Fix the problem that the image toolbar cannot be used [#293](https://github.com/margox/braft-editor/issues/293)
  - Partial detail optimization [#291](https://github.com/margox/braft-editor/issues/291)

### 2018-11-12 v2.1.27
----------------
 - Fix the problem that the picture toolbar is still available when readOnly is true and causes the readOnly attribute to become invalid

### 2018-10-29 v2.1.24
----------------
  - The new closeOnBlur property of the pop-up component is used to specify whether to close the pop-up window when the mask around the pop-up window is clicked. The default is true

### 2018-10-29 v2.1.23
----------------
  - Optimize how the editor uses the extension module, see for details [[Issue#278]](https://github.com/margox/braft-editor/issues/278)

### 2018-10-27 v2.1.22
----------------
  - Fix the issue of abnormal data update of popup components

### 2018-10-26 v2.1.21
----------------
  - Fix the problem that dragging the image to move the position in the editor caused the script to report an error (please update braft-convert to v2.1.9+)

### 2018-10-25 v2.1.20
----------------
  - Support calling param.success in uploadFn to pass in width and height attributes (need to update braft-utils to v3.0.5)
  - Custom control display optimization in imageControls

### 2018-10-23 v2.1.19
----------------
  - Support multiple lines of content in the quotation block, press Shift+Enter to jump out of the quotation block
  - Fixed an issue where some extension modules would cause the editorState to not be changed externally to be invalid
  - Optimize the output of code block content

### 2018-10-19 v2.1.18
----------------
  - Added (pseudo) fullscreen control component (control name: fullscreen) and onFullscreen callback
  - Added editorState.toText method to get the editor's plain text content
  - Added the readOnly attribute, which is different from the disabled attribute in that the content in the editor area is not prohibited
  - Fixed the problem of script reporting errors in React15.x

### 2018-10-18 v2.1.16
----------------
  - Fixed the issue that the unclosed media library pop-up window did not automatically close after the editor component was uninstalled
  - The extendControls array element supports incoming functions, and the editor instance and editorState can be obtained from the function parameters

### 2018-10-16 v2.1.13
----------------
  - Fixed an issue where some style settings were abnormal
  - Remove the code related to React.Fragment to improve the compatibility of the old version of React

### 2018-10-15 v2.1.10
----------------
  - Optimize the defaultValue method
  - Optimize row height display

### 2018-10-15 v2.1.8
----------------
  - Optimize the setting of the problem that the floating picture toolbar is blocked
  - Built-in color picker appearance adjustment

### 2018-10-14 v2.1.7
----------------
  - Optimize the display of toolbar buttons to wrap
  - Optimize the display of drop-down components in the low-height editor
  - Optimize the problem that the button is displayed abnormally in Ant Design

### 2018-10-12 v2.1.6
----------------
  - Fix the problem that the controlBarClassName and controlBarStyle attributes are invalid

### 2018-10-11 v2.1.4
----------------
  - Fix the problem that onChange will not be triggered when setting editor data asynchronously

### 2018-10-09 v2.1.3
----------------
  - Optimize BraftEditor.use

### 2018-10-09 v2.1.2
----------------
  - BraftEditor.use supports includeEditors and excludeEditors parameters to enable different extensions for different editors
  - Fix the problem [#244](https://github.com/margox/braft-editor/issues/244)
  - Try to optimize [#243](https://github.com/margox/braft-editor/issues/243)

### 2018-10-08 v2.1.1
----------------
  - Change the icon of the clear content button
  - Fix the problem of some abnormal styles

### 2018-10-08 v2.1.0
----------------
  - Further increase scalability, including adding custom entity, block and inline-style, as well as extending the editor’s conversion rules
  - Added BraftEditor.use static method for loading global extension modules
  - Added unit conversion function (converts.unitImportFn and converts.unitExportFn attributes)
  - Added onDelete, handleKeyCommand, handleReturn, handleBeforeInput and other attributes
  - Added the defaultLinkTarget attribute, which is used to specify the default link opening method
  - Added editorState.isEmpty() instance method to determine whether the editor content is empty
  - Added paragraph indentation function
  - Other details optimization

### 2018-09-29 v2.0.10
----------------
  - Add editorState parameters for onBlur and onFocus events

### 2018-09-29 v2.0.9
----------------
  - Add the media.items property to initialize the content of the media library

### 2018-09-27 v2.0.8
----------------
  - Fixed the problem that the text color in the initial content could not be detected
  - Added the BraftEditor.createEditorState static method

### 2018-09-26 v2.0.7
----------------
  - Fix the problem that the extended drop-down component cannot be used
  - Fixed the problem that the bottom bar disappears when the expanded pop-up window component is clicked again

### 2018-09-18 v2.0.6
----------------
  - Some controls support switch modes, such as bold, italic, etc.
  - Support dragging pictures to the editor area
  - Fix the problem of script reporting errors when inserting external videos

### 2018-09-06 v2.0.5
----------------
  - Pack font files, eliminating additional loader configuration

### 2018-09-05 v2.0.4
----------------
  - Fix the problem that when the defaultValue contains a picture, the mouse moves into the picture and causes an error

### 2018-09-04 v2.0.3
----------------
  - Fix the problem that pressing Tab in the code block caused an error
  - Fix the problem that the text prompt of the control is blocked

### 2018-09-04 v2.0.1
----------------
  - Add the render attribute to the custom control of the picture toolbar

### 2018-09-03 v2.0.0
----------------
  - The new version of v2.0.0 ship is released. It takes 3 minutes to experience and you will fall in love with the Jie Ge editor

version 1.x was not translated, please view CHANGELOG for more details
