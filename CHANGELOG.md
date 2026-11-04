# Versioning
First number increases when there is a change in features. Second number increases for bug fixes.

You can check the installed version by going to the app, enabling the editor and inspecting the comments field on the root element.

# CHANGE LOG

## v1.5: Added track params
### Dependencies
- DrivenByMoss v26.4.0
- Open Stage Control v1.31.1
- Bitwig Studio 5 or later (for track remote controls)
### Features:
- Added a "Devices" / "Track" switch at the top of the right column. In "Track" mode the faders control the params of the selected track (Bitwig's track remote controls) and the devices list is hidden.
- The "Param Pages" list shows the param pages of the selected device or, in "Track" mode, of the selected track.
- Buttons on the right column all have the same height, up to a maximum, and are stacked from the top. Buttons for missing devices or param pages are hidden.
### Fixes:
- Device faders now send their touch state to "/device/param/{1-8}/touched" instead of "/user/{1-8}/touched" (user params were replaced in Bitwig 5), so automation recording in "Touch" mode knows when a fader is held.

## v1.4: Added "Manual" option to "Measure" dropdown
- Added entry "Manual" to the "measure" dropdown which allows for free running clips.
- Tweaked colour of the beat indicator

## v1.3: Corrected Beat filtering
- With latest OSC script from DrivenByMoss, last beat number is zero padded which was not supported.

## v1.2: Added transport bar
- Added bar with transport buttons, beat indicator, clip size selector

## v1.1: Layout improvement
### Dependencies
- Open Stage Control v1.10.3
### Features:
- Non used buttons, for device and param pages, collapse so used can grow.

## v1.0: Initial Release
### Dependencies
- DrivenByMoss v11.8.0
- Open Stage Control v1.9.10
### Features:
- select tracks
- change track banks
- select devices within the selected track
- select param pages within the selected device
- change param values using faders
- show track names and color
- show device names
- show param page names
- show param values and colors
- resync with Bitwig
