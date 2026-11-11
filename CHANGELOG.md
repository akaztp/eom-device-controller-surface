# Versioning
First number increases when there is a change in features. Second number increases for bug fixes.

You can check the installed version by going to the app, enabling the editor and inspecting the comments field on the root element.

# CHANGE LOG

## v1.8: Project params
### Features:
- Removed the "Devices" / "Track" switch. The devices list now starts with "Project" and "Track" entries.
- "Track" turns the track params on or off (on by default). While it's on, the faders show the track params before the device params, and the "Param Pages" list shows the track's param pages before the device's.
- "Project" shows only the params of the project's current param page on the faders (Bitwig's project remote controls), and lists the project's param pages. Tapping a device, or "Track", goes back to the device params.
- When the track itself is selected in Bitwig's device panel and "Track" is off, its params are shown as device params.
- Added a "Devices" title above the devices list.
- "Project", "Track" and the devices each have their own colour (blue, green and purple), shared with their param pages.

## v1.7: Track and device params side by side
### Features:
- The faders show the params of the selected track's current param page followed by the params of the selected device's current param page. Params without a name are skipped and at most 8 are shown.
- When the track itself is selected in Bitwig's device panel (its track remote controls), its params are shown only once, as track params. DrivenByMoss doesn't report this selection, so it's recognized by the device having the same param pages, or the same params, as the track.
- The "Devices" / "Track" switch now only selects what the lists below it show: the devices of the selected track and their param pages, or the track's param pages.
- The track select buttons are now a row of their own above the faders.

## v1.6: Beat progress strip
### Features:
- The beat indicator shows a thin strip inside the block of the current beat, growing from left to right until the next beat. It takes as long as the time between the latest beats as measured on the device, so it reaches the end as the next block lights up; before the first measurement it uses the DAW tempo ("/tempo/raw"). It is hidden while playback is stopped.

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
