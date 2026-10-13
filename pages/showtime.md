alias:: 本地视频工作室, 视频工作室, agent 视频

- 给 coding agent 用的本地视频工作室。一句话描述片子，agent 导演，本机渲染。不上传，也不需要视频 API key。[Repo](https://github.com/FavioVazquez/showtime)
- 能出 motion graphics、旁白、音乐、音效、字幕、素材剪辑，以及各平台导出。不需要 GPU。自己的代码是 MIT。状态 0.4，1.0 前命令和文件格式还可能变。
- 测过 Claude Code、Codex、Cursor、Devin、OpenCode。Grok Build 和 Hermes 不在测试名单里。
- 使用场景：
	- repo、launch、changelog 短片。给仓库或 release notes 一句话，出带旁白和音乐的 MP4。源码留在本机。
	- 长录音切竖版。`showtime edit moments` 在本机给 podcast、talk、panel 排高光，`showtime edit clips` 做成带字幕的竖版。
	- 已有动画收成片。`showtime adopt` 把 HTML、canvas，或 Claude Design 的导出，收成 1080p，再加音乐和字幕。
- 不适合当云端视频模型，也不适合默认拿来做中文旁白。装好后 `~/.showtime` 大约 1.4–1.8 GB。默认转写是 Parakeet，覆盖 25 种语言，含英西；其他语言才走 Whisper。
- 见 [[Agent]]、[[Video Editing]]。展开在 [[2026-10-11]]。
