- ```
  # take screenshots as jpg (usually smaller size) and not png
  defaults write com.apple.screencapture type jpg
  
  # show hidden files
  defaults write com.apple.finder AppleShowAllFiles YES
  
  # show path bar
  defaults write com.apple.finder ShowPathbar -bool true
  
  # show status bar
  defaults write com.apple.finder ShowStatusBar -bool true
  
  # For VSCode key repeat
  defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false
  
  killall Finder;
  ```
-