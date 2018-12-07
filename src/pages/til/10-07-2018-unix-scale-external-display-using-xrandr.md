---
date: "2018-07-10"
title: "Unix: Scale external display using Xrandr"
path: "/til/unix-scale-external-display-using-xrandr"
type: "til"
category: "unix"
---

Ubuntu 18.04 won't let you set two different screen scales if you have a HiDPI/QHD laptop and want to connect it to an external monitor with a lower resolution. I faced this issue while trying to connect my Dell XPS 13 which has a resolution of 3200x1800 to a external monitor which is 1920x1080. I can either run both the displays at 1x scale which means while the things look fine on the external display, however, everything would be extermly small on the laptop screen or the other way around.

For a while I just ended up using the external display with 1x scale, but eventually figured out how we can address this problem by using `xrandr` which allows us to manually scale each display and set a particular resolution.

With the external monitor connected, try running `xrandr` in your terminal and it should generate output similar to this:

```bash
Screen 0: minimum 320 x 200, current 5120 x 1800, maximum 8192 x 8192
eDP-1 connected 3200x1800+1920+0 (normal left inverted right x axis y axis) 294mm x 165mm
   3200x1800     59.98*+  59.96    59.94    47.99  
   2880x1620     59.96    59.97  
   2560x1600     59.99    59.97  
   2560x1440     59.99    59.99    59.96    59.95  
   2048x1536     60.00  
   1920x1440     60.00  
   1856x1392     60.01  
   1792x1344     60.01  
   2048x1152     59.99    59.98    59.90    59.91  
   1920x1200     59.88    59.95  
   1920x1080     60.01    59.97    59.96    59.93  
....truncated
DP-1 connected primary 1920x1080+0+0 (normal left inverted right x axis y axis) 476mm x 267mm
   1920x1080     60.00*+  50.00    59.94  
   1920x1080i    60.00    50.00    59.94  
   1280x1024     75.02    60.02  
   1152x864      75.00  
   1280x720      60.00    50.00    59.94  
   1024x768      75.03    60.00  
....truncated
DP-2 disconnected (normal left inverted right x axis y axis)
```

Here eDP-1 is my laptop display and DP-1 is the external monitor. To make sure the display are both scaled to look alike I'll set the scaling to 1x in OS _Display settings_ and then use `xrandr` to upscale the laptop resolution. For 3200x1800, I'll scale it to 2x by setting the resolution to half of it which calculates to 1600x900.

```bash
alias scale='xrandr --output eDP-1 --mode 1600x900 --scale 1x1'
```

I've added this snippet to my shell profile, so everytime I connect an external display I can run `scale` to fix the scaling on the laptop screen.
