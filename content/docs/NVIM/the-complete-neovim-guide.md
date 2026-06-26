---
title: The Complete Neovim Guide
---

## Introduction & Installation

### What is Neovim?

Neovim is a modern, extensible text editor based on Vim. It's designed for efficient text editing using keyboard commands instead of a mouse.

### Why Learn Neovim?

- Lightning-fast editing once you master it
- Works everywhere (local, remote, servers)
- Highly customizable
- Active community and plugin ecosystem
- Improves your understanding of text manipulation

### Installation

**macOS:**

```bash
brew install neovim
```

**Ubuntu/Debian:**

```bash
sudo apt update
sudo apt install neovim
```

**Arch Linux:**

```bash
sudo pacman -S neovim
```

**Windows:**

```bash
# Using Chocolatey
choco install neovim

# Using Scoop
scoop install neovim

# Or download from https://github.com/neovim/neovim/releases
```

**Verify installation:**

```bash
nvim --version
```

---

## Stage 1: Survival Basics

### Understanding Modes

Neovim operates in different modes. This is THE fundamental concept:

1. **Normal Mode** - Navigate and manipulate text (DEFAULT)
2. **Insert Mode** - Type text like a regular editor
3. **Visual Mode** - Select text
4. **Command-Line Mode** - Execute commands
5. **Replace Mode** - Overwrite text

### Your First Session

1. Open terminal and type: `nvim`
2. You're now in **Normal Mode**
3. Press `i` to enter **Insert Mode** (you'll see `-- INSERT --` at bottom)
4. Type something: "Hello Neovim!"
5. Press `Esc` to return to **Normal Mode**
6. Type `:wq` and press `Enter` to save and quit

### Essential Survival Commands

|Command|Action|
|---|---|
|`i`|Enter Insert mode (before cursor)|
|`a`|Enter Insert mode (after cursor)|
|`Esc`|Return to Normal mode|
|`:w`|Save file|
|`:q`|Quit|
|`:wq` or `ZZ`|Save and quit|
|`:q!`|Quit without saving|
|`:help`|Open help|

### Practice Exercise 1

1. Open nvim: `nvim practice.txt`
2. Press `i`, type "This is line 1"
3. Press `Esc`
4. Type `:wq` to save and exit
5. Repeat 10 times until it feels natural

**Goal:** Be comfortable entering/exiting Insert mode and saving/quitting.

---

## Stage 2: Basic Movement

**CRITICAL:** In Normal mode, DO NOT use arrow keys. Use these instead:

### Cardinal Directions

```
     k (up)
     ↑
h ← you → l (right)
     ↓
   j (down)
```

**Mnemonic:**

- `h` = left (leftmost key)
- `l` = right (rightmost key)
- `j` = down (looks like down arrow)
- `k` = up

### Word Movement

|Command|Action|
|---|---|
|`w`|Move forward to start of next word|
|`b`|Move backward to start of previous word|
|`e`|Move to end of current/next word|
|`W`|Move forward by WORD (space-separated)|
|`B`|Move backward by WORD|
|`E`|Move to end of WORD|

**Difference:** `w` stops at punctuation, `W` doesn't.

- Example: "hello-world" → `w` stops at `-`, `W` doesn't

### Line Movement

|Command|Action|
|---|---|
|`0`|Move to start of line|
|`^`|Move to first non-blank character|
|`$`|Move to end of line|
|`g_`|Move to last non-blank character|

### Screen Movement

|Command|Action|
|---|---|
|`H`|Move to top of screen (High)|
|`M`|Move to middle of screen (Middle)|
|`L`|Move to bottom of screen (Low)|
|`Ctrl-u`|Scroll up half page|
|`Ctrl-d`|Scroll down half page|
|`Ctrl-b`|Scroll up full page (Back)|
|`Ctrl-f`|Scroll down full page (Forward)|
|`gg`|Go to first line of file|
|`G`|Go to last line of file|
|`{number}G`|Go to line number (e.g., `50G`)|

### Practice Exercise 2

Open a file with multiple paragraphs:

1. Use only `hjkl` for 5 minutes (no arrow keys!)
2. Practice `w` and `b` to jump between words
3. Use `0` and `$` to jump to line start/end
4. Use `gg` and `G` to jump to file start/end

**Goal:** Navigate without thinking about the keys.

---

## Stage 3: Editing Operations

### Insert Mode Variants

|Command|Action|
|---|---|
|`i`|Insert before cursor|
|`a`|Insert after cursor (append)|
|`I`|Insert at start of line|
|`A`|Insert at end of line|
|`o`|Open new line below|
|`O`|Open new line above|

### Deleting

|Command|Action|
|---|---|
|`x`|Delete character under cursor|
|`X`|Delete character before cursor|
|`dd`|Delete entire line|
|`D`|Delete from cursor to end of line|
|`dw`|Delete word|
|`d$`|Delete to end of line|
|`d0`|Delete to start of line|

### Changing (Delete + Insert)

|Command|Action|
|---|---|
|`cc` or `S`|Change entire line|
|`C`|Change to end of line|
|`cw`|Change word|
|`ciw`|Change inner word (regardless of cursor position)|
|`ci"`|Change inside quotes|

### Copying (Yanking) and Pasting

|Command|Action|
|---|---|
|`yy` or `Y`|Yank (copy) entire line|
|`yw`|Yank word|
|`y$`|Yank to end of line|
|`p`|Paste after cursor/line|
|`P`|Paste before cursor/line|

### Undo and Redo

|Command|Action|
|---|---|
|`u`|Undo|
|`Ctrl-r`|Redo|
|`U`|Undo all changes on line|

### Practice Exercise 3

Create a file with lorem ipsum text:

1. Delete 5 lines with `dd`
2. Undo with `u`
3. Copy a line with `yy`, paste with `p`
4. Change a word with `cw`
5. Delete from cursor to end of line with `D`

**Goal:** Edit text without entering Insert mode unnecessarily.

---

## Stage 4: Advanced Movement

### Character Search

|Command|Action|
|---|---|
|`f{char}`|Find next occurrence of {char} on line|
|`F{char}`|Find previous occurrence of {char} on line|
|`t{char}`|Move till (before) next {char}|
|`T{char}`|Move till (before) previous {char}|
|`;`|Repeat last f/F/t/T|
|`,`|Repeat last f/F/t/T in opposite direction|

**Example:** On line "hello world", cursor at start:

- `fw` → cursor moves to 'w' in "world"
- `fo` → cursor moves to first 'o' in "hello"

### Paragraph and Block Movement

|Command|Action|
|---|---|
|`{`|Move to previous paragraph/block|
|`}`|Move to next paragraph/block|
|`(`|Move to previous sentence|
|`)`|Move to next sentence|

### Marks and Jumps

|Command|Action|
|---|---|
|`m{letter}`|Set mark (bookmark) at cursor position|
|`'{letter}`|Jump to mark|
|`` ` {letter} ``|Jump to exact position of mark|
|`''`|Jump back to previous position|
|`Ctrl-o`|Jump to older position in jump list|
|`Ctrl-i`|Jump to newer position in jump list|

**Example:**

1. `ma` - set mark 'a' at current position
2. Move around the file
3. `'a` - jump back to mark 'a'

### Matching Brackets

|Command|Action|
|---|---|
|`%`|Jump to matching bracket/parenthesis/brace|

---

## Stage 5: Text Objects & Operators

This is where Vim becomes extremely powerful. The pattern is:

```
{operator}{motion or text-object}
```

### Operators

|Operator|Action|
|---|---|
|`d`|Delete|
|`c`|Change (delete and enter insert mode)|
|`y`|Yank (copy)|
|`v`|Visually select|
|`>`|Indent|
|`<`|Unindent|
|`=`|Auto-indent|
|`gU`|Make uppercase|
|`gu`|Make lowercase|

### Text Objects

|Text Object|Description|
|---|---|
|`iw`|Inner word|
|`aw`|A word (includes surrounding space)|
|`is`|Inner sentence|
|`as`|A sentence|
|`ip`|Inner paragraph|
|`ap`|A paragraph|
|`i"`|Inside double quotes|
|`a"`|Around double quotes (includes quotes)|
|`i'`|Inside single quotes|
|`a'`|Around single quotes|
|`i(` or `i)` or `ib`|Inside parentheses|
|`a(` or `a)` or `ab`|Around parentheses|
|`i{` or `i}` or `iB`|Inside braces|
|`a{` or `a}` or `aB`|Around braces|
|`i[` or `i]`|Inside brackets|
|`a[` or `a]`|Around brackets|
|`i<` or `i>`|Inside angle brackets|
|`a<` or `a>`|Around angle brackets|
|`it`|Inside tag (HTML/XML)|
|`at`|Around tag|

### Powerful Combinations

|Command|Action|Example|
|---|---|---|
|`diw`|Delete inner word|Deletes word under cursor|
|`daw`|Delete a word|Deletes word + space|
|`ci"`|Change inside quotes|Changes text in "quotes"|
|`yi(`|Yank inside parentheses|Copies text in (parens)|
|`da}`|Delete around braces|Deletes {content and braces}|
|`yap`|Yank a paragraph|Copies entire paragraph|
|`vit`|Select inside tag|Selects content in <tag>|
|`gUiw`|Uppercase inner word|Makes word UPPERCASE|

### Practice Exercise 4

Use this text:

```
The "quick" brown fox jumps over the (lazy) dog.
function hello() {
    console.log('world');
}
```

Practice:

1. Position cursor on "quick", type `ci"` and change the text
2. On "lazy", type `di(` to delete text in parentheses
3. On "console", type `diw` to delete the word
4. On opening `{`, type `di{` to delete function body

**Goal:** Understand the operator + text-object pattern.

---

## Stage 6: Visual Mode

Visual mode allows you to select text before operating on it.

### Types of Visual Mode

|Command|Mode|
|---|---|
|`v`|Character-wise visual mode|
|`V`|Line-wise visual mode|
|`Ctrl-v`|Block-wise visual mode|

### Using Visual Mode

1. Enter visual mode (`v`, `V`, or `Ctrl-v`)
2. Move cursor to select text
3. Perform operation (`d`, `y`, `c`, etc.)

### Visual Mode Operations

|Command|Action|
|---|---|
|`v` + movement + `d`|Delete selection|
|`v` + movement + `y`|Yank selection|
|`v` + movement + `c`|Change selection|
|`V` + movement + `>`|Indent selected lines|
|`V` + movement + `<`|Unindent selected lines|
|`Ctrl-v` + movement + `I`|Insert at start of block|
|`Ctrl-v` + movement + `A`|Append at end of block|

### Block Visual Mode (Ctrl-v)

Extremely useful for columnar editing:

1. `Ctrl-v` - enter block visual mode
2. `j` - select down multiple lines
3. `I` - insert at start of each line
4. Type text
5. `Esc` - apply to all lines

**Example:** Add `//` comment to multiple lines:

1. `Ctrl-v`
2. `jjj` (select 4 lines)
3. `I`
4. Type `//`
5. `Esc`

### Practice Exercise 5

1. Select 3 lines with `V` and indent with `>`
2. Select a word with `v` and change it
3. Use `Ctrl-v` to add `#` at the start of 5 lines

**Goal:** Comfortable selecting and manipulating text visually.

---

## Stage 7: Search & Replace

### Basic Search

|Command|Action|
|---|---|
|`/pattern`|Search forward for pattern|
|`?pattern`|Search backward for pattern|
|`n`|Next match (same direction)|
|`N`|Previous match (opposite direction)|
|`*`|Search forward for word under cursor|
|`#`|Search backward for word under cursor|

### Search Options

|Command|Action|
|---|---|
|`:set ignorecase` or `:set ic`|Case-insensitive search|
|`:set noignorecase` or `:set noic`|Case-sensitive search|
|`:set hlsearch` or `:set hls`|Highlight search results|
|`:nohlsearch` or `:noh`|Clear search highlighting|
|`:set incsearch` or `:set is`|Incremental search (show matches as you type)|

### Substitute (Replace)

Basic syntax: `:s/old/new/flags`

|Command|Action|
|---|---|
|`:s/old/new`|Replace first occurrence on current line|
|`:s/old/new/g`|Replace all occurrences on current line|
|`:%s/old/new/g`|Replace all occurrences in entire file|
|`:%s/old/new/gc`|Replace all with confirmation|
|`:5,12s/old/new/g`|Replace in lines 5-12|
|`:'<,'>s/old/new/g`|Replace in visual selection|

### Regex Patterns

|Pattern|Matches|
|---|---|
|`.`|Any single character|
|`*`|Zero or more of previous character|
|`\+`|One or more of previous character|
|`\?`|Zero or one of previous character|
|`^`|Start of line|
|`$`|End of line|
|`\<`|Start of word|
|`\>`|End of word|
|`[abc]`|Any character a, b, or c|
|`[^abc]`|Any character except a, b, or c|
|`[0-9]`|Any digit|
|`\d`|Any digit|
|`\s`|Any whitespace|
|`\w`|Any word character|

### Practice Exercise 6

Create a file with repeated words:

1. Search for a word: `/word`
2. Navigate matches with `n` and `N`
3. Replace all "old" with "new": `:%s/old/new/g`
4. Replace with confirmation: `:%s/test/example/gc`

**Goal:** Efficiently find and replace text.

---

## Stage 8: Windows, Tabs & Buffers

### Understanding the Hierarchy

- **Buffer** - A file loaded in memory
- **Window** - A viewport on a buffer
- **Tab** - A collection of windows

### Buffers

|Command|Action|
|---|---|
|`:e filename`|Open file in buffer|
|`:ls` or `:buffers`|List all buffers|
|`:b {number}`|Switch to buffer number|
|`:b {name}`|Switch to buffer by name (tab completion)|
|`:bn`|Next buffer|
|`:bp`|Previous buffer|
|`:bd`|Delete (close) buffer|
|`:badd filename`|Add file to buffer list|

### Windows (Splits)

|Command|Action|
|---|---|
|`:split` or `:sp`|Horizontal split|
|`:vsplit` or `:vsp`|Vertical split|
|`:split filename`|Open file in horizontal split|
|`:vsplit filename`|Open file in vertical split|
|`Ctrl-w s`|Horizontal split (same file)|
|`Ctrl-w v`|Vertical split (same file)|
|`Ctrl-w w`|Cycle through windows|
|`Ctrl-w h/j/k/l`|Move to window (left/down/up/right)|
|`Ctrl-w c`|Close current window|
|`Ctrl-w o`|Close all other windows|
|`Ctrl-w =`|Make windows equal size|
|`Ctrl-w +`|Increase window height|
|`Ctrl-w -`|Decrease window height|
|`Ctrl-w >`|Increase window width|
|`Ctrl-w <`|Decrease window width|

### Tabs

|Command|Action|
|---|---|
|`:tabnew`|New tab|
|`:tabnew filename`|Open file in new tab|
|`:tabclose`|Close current tab|
|`:tabonly`|Close all other tabs|
|`gt` or `:tabnext`|Next tab|
|`gT` or `:tabprevious`|Previous tab|
|`{number}gt`|Go to tab number|
|`:tabs`|List all tabs|

### Practice Exercise 7

1. Open a file: `nvim file1.txt`
2. Split horizontally: `:split file2.txt`
3. Split vertically: `:vsplit file3.txt`
4. Navigate between windows with `Ctrl-w h/j/k/l`
5. Open a new tab: `:tabnew file4.txt`
6. Switch between tabs with `gt` and `gT`

**Goal:** Manage multiple files efficiently.

---

## Stage 9: Configuration Basics

### Configuration File Location

Neovim uses `init.lua` (or `init.vim` for Vimscript):

- **Linux/macOS:** `~/.config/nvim/init.lua`
- **Windows:** `~/AppData/Local/nvim/init.lua`

### Creating Your First Config

```bash
# Create config directory
mkdir -p ~/.config/nvim

# Create init.lua
nvim ~/.config/nvim/init.lua
```

### Basic init.lua Configuration

```lua
-- Basic Settings
vim.opt.number = true              -- Show line numbers
vim.opt.relativenumber = true      -- Relative line numbers
vim.opt.mouse = 'a'                -- Enable mouse
vim.opt.ignorecase = true          -- Case-insensitive search
vim.opt.smartcase = true           -- Case-sensitive if uppercase used
vim.opt.hlsearch = true            -- Highlight search results
vim.opt.wrap = false               -- Don't wrap lines
vim.opt.breakindent = true         -- Wrapped lines continue indented
vim.opt.tabstop = 4                -- Tab width
vim.opt.shiftwidth = 4             -- Indent width
vim.opt.expandtab = true           -- Convert tabs to spaces
vim.opt.autoindent = true          -- Copy indent from current line
vim.opt.smartindent = true         -- Smart autoindenting
vim.opt.termguicolors = true       -- True color support
vim.opt.signcolumn = 'yes'         -- Always show sign column
vim.opt.updatetime = 250           -- Faster completion
vim.opt.timeoutlen = 300           -- Time to wait for mapped sequence
vim.opt.splitright = true          -- Vertical splits go right
vim.opt.splitbelow = true          -- Horizontal splits go below
vim.opt.cursorline = true          -- Highlight current line
vim.opt.scrolloff = 8              -- Lines to keep above/below cursor
vim.opt.sidescrolloff = 8          -- Columns to keep left/right of cursor

-- Leader key (space)
vim.g.mapleader = ' '
vim.g.maplocalleader = ' '

-- Basic Keymaps
-- Clear search highlighting
vim.keymap.set('n', '<Esc>', '<cmd>nohlsearch<CR>')

-- Better window navigation
vim.keymap.set('n', '<C-h>', '<C-w>h')
vim.keymap.set('n', '<C-j>', '<C-w>j')
vim.keymap.set('n', '<C-k>', '<C-w>k')
vim.keymap.set('n', '<C-l>', '<C-w>l')

-- Resize windows
vim.keymap.set('n', '<C-Up>', ':resize -2<CR>')
vim.keymap.set('n', '<C-Down>', ':resize +2<CR>')
vim.keymap.set('n', '<C-Left>', ':vertical resize -2<CR>')
vim.keymap.set('n', '<C-Right>', ':vertical resize +2<CR>')

-- Buffer navigation
vim.keymap.set('n', '<S-l>', ':bnext<CR>')
vim.keymap.set('n', '<S-h>', ':bprevious<CR>')

-- Move text up and down
vim.keymap.set('v', 'J', ":m '>+1<CR>gv=gv")
vim.keymap.set('v', 'K', ":m '<-2<CR>gv=gv")

-- Keep cursor centered when scrolling
vim.keymap.set('n', '<C-d>', '<C-d>zz')
vim.keymap.set('n', '<C-u>', '<C-u>zz')

-- Keep search matches centered
vim.keymap.set('n', 'n', 'nzzzv')
vim.keymap.set('n', 'N', 'Nzzzv')

-- Paste without yanking in visual mode
vim.keymap.set('x', '<leader>p', '"_dP')

-- Yank to system clipboard
vim.keymap.set('n', '<leader>y', '"+y')
vim.keymap.set('v', '<leader>y', '"+y')
vim.keymap.set('n', '<leader>Y', '"+Y')

-- Delete without yanking
vim.keymap.set('n', '<leader>d', '"_d')
vim.keymap.set('v', '<leader>d', '"_d')

-- Disable Q (ex mode)
vim.keymap.set('n', 'Q', '<nop>')

-- Save with Ctrl-s
vim.keymap.set('n', '<C-s>', ':w<CR>')
vim.keymap.set('i', '<C-s>', '<Esc>:w<CR>a')

-- Quit
vim.keymap.set('n', '<leader>q', ':q<CR>')
vim.keymap.set('n', '<leader>Q', ':qa!<CR>')

-- Autocommands
-- Highlight yanked text
vim.api.nvim_create_autocmd('TextYankPost', {
  desc = 'Highlight when yanking text',
  group = vim.api.nvim_create_augroup('highlight-yank', { clear = true }),
  callback = function()
    vim.highlight.on_yank()
  end,
})

-- Remove trailing whitespace on save
vim.api.nvim_create_autocmd('BufWritePre', {
  pattern = '*',
  callback = function()
    local save_cursor = vim.fn.getpos('.')
    vim.cmd([[%s/\s\+$//e]])
    vim.fn.setpos('.', save_cursor)
  end,
})
```

### Vimscript Version (init.vim)

If you prefer Vimscript, create `~/.config/nvim/init.vim`:

```vim
" Basic Settings
set number
set relativenumber
set mouse=a
set ignorecase
set smartcase
set hlsearch
set wrap
set tabstop=4
set shiftwidth=4
set expandtab
set autoindent
set termguicolors
set signcolumn=yes
set updatetime=250
set splitright
set splitbelow
set cursorline
set scrolloff=8

" Leader key
let mapleader = " "

" Clear search highlighting
nnoremap <Esc> :nohlsearch<CR>

" Better window navigation
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Save with Ctrl-s
nnoremap <C-s> :w<CR>
inoremap <C-s> <Esc>:w<CR>a
```

### Reload Configuration

After editing config:

- `:source ~/.config/nvim/init.lua` (or `:source %` if you're editing the config file)
- Or restart Neovim

---

## Stage 10: Plugin Management

### Installing a Plugin Manager

We'll use **lazy.nvim** - the modern, fast plugin manager.

Add this to your `init.lua`:

```lua
-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- Configure plugins
require("lazy").setup({
  -- Add plugins here
})
```

### Essential Plugins

Create a plugins directory structure:

```bash
mkdir -p ~/.config/nvim/lua/plugins
```

Create `~/.config/nvim/lua/plugins/init.lua`:

```lua
return {
  -- Color scheme
  {
    'folke/tokyonight.nvim',
    priority = 1000,
    config = function()
      vim.cmd.colorscheme 'tokyonight-night'
    end,
  },

  -- File explorer
  {
    'nvim-tree/nvim-tree.lua',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('nvim-tree').setup()
      vim.keymap.set('n', '<leader>e', ':NvimTreeToggle<CR>')
    end,
  },

  -- Fuzzy finder
  {
    'nvim-telescope/telescope.nvim',
    branch = '0.1.x',
    dependencies = { 'nvim-lua/plenary.nvim' },
    config = function()
      local builtin = require('telescope.builtin')
      vim.keymap.set('n', '<leader>ff', builtin.find_files, {})
      vim.keymap.set('n', '<leader>fg', builtin.live_grep, {})
      vim.keymap.set('n', '<leader>fb', builtin.buffers, {})
      vim.keymap.set('n', '<leader>fh', builtin.help_tags, {})
    end,
  },

  -- Status line
  {
    'nvim-lualine/lualine.nvim',
    dependencies = { 'nvim-tree/nvim-web-devicons' },
    config = function()
      require('lualine').setup {
        options = {
          theme = 'tokyonight',
          component_separators = '|',
          section_separators = '',
        },
      }
    end,
  },

  -- Git integration
  {
    'lewis6991/gitsigns.nvim',
    config = function()
      require('gitsigns').setup()
    end,
  },

  -- Commenting
  {
    'numToStr/Comment.nvim',
    config = function()
      require('Comment').setup()
    end,
  },

  -- Auto pairs
  {
    'windwp/nvim-autopairs',
    event = 'InsertEnter',
    config = function()
      require('nvim-autopairs').setup()
    end,
  },

  -- Treesitter for syntax highlighting
  {
    'nvim-treesitter/nvim-treesitter',
    build = ':TSUpdate',
    config = function()
      require('nvim-treesitter.configs').setup {
        ensure_installed = { 'lua', 'vim', 'vimdoc', 'python', 'javascript', 'typescript' },
        auto_install = true,
        highlight = { enable = true },
        indent = { enable = true },
      }
    end,
  },

  -- Which-key for keybinding hints
  {
    'folke/which-key.nvim',
    event = 'VeryLazy',
    init = function()
      vim.o.timeout = true
      vim.o.timeoutlen = 300
    end,
    config = function()
      require('which-key').setup()
    end,
  },
}
```

Update your main `init.lua`:

```lua
-- [Previous basic settings here]

-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- Load plugins
require("lazy").setup("plugins")
```

### Installing Plugins

1. Save your config
2. Restart Neovim
3. Plugins will auto-install
4. Or run `:Lazy` to manage plugins

### Plugin Commands

|Command|Action|
|---|---|
|`:Lazy`|Open plugin manager|
|`:Lazy install`|Install plugins|
|`:Lazy update`|Update plugins|
|`:Lazy clean`|Remove unused plugins|
|`:Lazy sync`|Install and clean|

---

## Stage 11: Advanced Configuration

### Project Structure

Organize your config:

```
~/.config/nvim/
├── init.lua
├── lua/
│   ├── core/
│   │   ├── options.lua
│   │   ├── keymaps.lua
│   │   └── autocmds.lua
│   └── plugins/
│       ├── init.lua
│       ├── lsp.lua
│       ├── cmp.lua
│       └── telescope.lua
```

### Split Configuration

**init.lua:**

```lua
-- Bootstrap lazy.nvim
local lazypath = vim.fn.stdpath("data") .. "/lazy/lazy.nvim"
if not vim.loop.fs_stat(lazypath) then
  vim.fn.system({
    "git",
    "clone",
    "--filter=blob:none",
    "https://github.com/folke/lazy.nvim.git",
    "--branch=stable",
    lazypath,
  })
end
vim.opt.rtp:prepend(lazypath)

-- Load core configuration
require("core.options")
require("core.keymaps")
require("core.autocmds")

-- Load plugins
require("lazy").setup("plugins")
```

**lua/core/options.lua:**

```lua
local opt = vim.opt

-- Line numbers
opt.number = true
opt.relativenumber = true

-- Tabs & indentation
opt.tabstop = 4
opt.shiftwidth = 4
opt.expandtab = true
opt.autoindent = true

-- Search
opt.ignorecase = true
opt.smartcase = true
opt.hlsearch = true
opt.incsearch = true

-- Appearance
opt.termguicolors = true
opt.signcolumn = "yes"
opt.cursorline = true
opt.wrap = false

-- Behavior
opt.mouse = "a"
opt.clipboard = "unnamedplus"
opt.splitright = true
opt.splitbelow = true
opt.scrolloff = 8
opt.sidescrolloff = 8
opt.updatetime = 250
opt.timeoutlen = 300

-- File handling
opt.swapfile = false
opt.backup = false
opt.undofile = true
opt.undodir = os.getenv("HOME") .. "/.vim/undodir"
```

**lua/core/keymaps.lua:**

```lua
local keymap = vim.keymap.set
local opts = { noremap = true, silent = true }

-- Leader key
vim.g.mapleader = " "
vim.g.maplocalleader = " "

-- General
keymap("n", "<Esc>", "<cmd>nohlsearch<CR>", opts)
keymap("n", "<C-s>", ":w<CR>", opts)
keymap("i", "<C-s>", "<Esc>:w<CR>a", opts)

-- Window navigation
keymap("n", "<C-h>", "<C-w>h", opts)
keymap("n", "<C-j>", "<C-w>j", opts)
keymap("n", "<C-k>", "<C-w>k", opts)
keymap("n", "<C-l>", "<C-w>l", opts)

-- Window resizing
keymap("n", "<C-Up>", ":resize -2<CR>", opts)
keymap("n", "<C-Down>", ":resize +2<CR>", opts)
keymap("n", "<C-Left>", ":vertical resize -2<CR>", opts)
keymap("n", "<C-Right>", ":vertical resize +2<CR>", opts)

-- Buffer navigation
keymap("n", "<S-l>", ":bnext<CR>", opts)
keymap("n", "<S-h>", ":bprevious<CR>", opts)
keymap("n", "<leader>bd", ":bdelete<CR>", opts)

-- Better paste
keymap("v", "p", '"_dP', opts)

-- Move text up/down
keymap("v", "J", ":m '>+1<CR>gv=gv", opts)
keymap("v", "K", ":m '<-2<CR>gv=gv", opts)

-- Keep centered
keymap("n", "<C-d>", "<C-d>zz", opts)
keymap("n", "<C-u>", "<C-u>zz", opts)
keymap("n", "n", "nzzzv", opts)
keymap("n", "N", "Nzzzv", opts)

-- Quick fix list
keymap("n", "<C-k>", ":cnext<CR>zz", opts)
keymap("n", "<C-j>", ":cprev<CR>zz", opts)
```

**lua/core/autocmds.lua:**

```lua
local autocmd = vim.api.nvim_create_autocmd
local augroup = vim.api.nvim_create_augroup

-- Highlight on yank
autocmd("TextYankPost", {
  group = augroup("highlight_yank", { clear = true }),
  callback = function()
    vim.highlight.on_yank({ timeout = 200 })
  end,
})

-- Remove trailing whitespace
autocmd("BufWritePre", {
  group = augroup("remove_trailing_whitespace", { clear = true }),
  pattern = "*",
  callback = function()
    local save_cursor = vim.fn.getpos(".")
    vim.cmd([[%s/\s\+$//e]])
    vim.fn.setpos(".", save_cursor)
  end,
})

-- Restore cursor position
autocmd("BufReadPost", {
  group = augroup("restore_cursor", { clear = true }),
  callback = function()
    local mark = vim.api.nvim_buf_get_mark(0, '"')
    if mark[1] > 0 and mark[1] <= vim.api.nvim_buf_line_count(0) then
      vim.api.nvim_win_set_cursor(0, mark)
    end
  end,
})

-- Auto-format on save
autocmd("BufWritePre", {
  group = augroup("auto_format", { clear = true }),
  pattern = { "*.lua", "*.py", "*.js", "*.ts" },
  callback = function()
    vim.lsp.buf.format({ async = false })
  end,
})

-- Close certain filetypes with 'q'
autocmd("FileType", {
  group = augroup("close_with_q", { clear = true }),
  pattern = { "help", "qf", "man", "lspinfo" },
  callback = function(event)
    vim.bo[event.buf].buflisted = false
    vim.keymap.set("n", "q", "<cmd>close<cr>", { buffer = event.buf, silent = true })
  end,
})
```

---

## Stage 12: LSP & Code Intelligence

LSP (Language Server Protocol) provides IDE-like features: autocomplete, go-to-definition, diagnostics, etc.

### LSP Configuration

Create `lua/plugins/lsp.lua`:

```lua
return {
  -- LSP Configuration
  {
    'neovim/nvim-lspconfig',
    dependencies = {
      'williamboman/mason.nvim',
      'williamboman/mason-lspconfig.nvim',
      'hrsh7th/cmp-nvim-lsp',
      { 'j-hui/fidget.nvim', opts = {} },
    },
    config = function()
      -- Set up Mason
      require('mason').setup()
      require('mason-lspconfig').setup({
        ensure_installed = {
          'lua_ls',
          'pyright',
          'tsserver',
          'rust_analyzer',
        },
      })

      -- Keymaps when LSP attaches
      vim.api.nvim_create_autocmd('LspAttach', {
        group = vim.api.nvim_create_augroup('lsp-attach', { clear = true }),
        callback = function(event)
          local map = function(keys, func, desc)
            vim.keymap.set('n', keys, func, { buffer = event.buf, desc = 'LSP: ' .. desc })
          end

          map('gd', require('telescope.builtin').lsp_definitions, 'Goto Definition')
          map('gr', require('telescope.builtin').lsp_references, 'Goto References')
          map('gI', require('telescope.builtin').lsp_implementations, 'Goto Implementation')
          map('<leader>D', require('telescope.builtin').lsp_type_definitions, 'Type Definition')
          map('<leader>ds', require('telescope.builtin').lsp_document_symbols, 'Document Symbols')
          map('<leader>ws', require('telescope.builtin').lsp_dynamic_workspace_symbols, 'Workspace Symbols')
          map('<leader>rn', vim.lsp.buf.rename, 'Rename')
          map('<leader>ca', vim.lsp.buf.code_action, 'Code Action')
          map('K', vim.lsp.buf.hover, 'Hover Documentation')
          map('gD', vim.lsp.buf.declaration, 'Goto Declaration')
        end,
      })

      -- LSP servers configuration
      local capabilities = vim.lsp.protocol.make_client_capabilities()
      capabilities = require('cmp_nvim_lsp').default_capabilities(capabilities)

      local servers = {
        lua_ls = {
          settings = {
            Lua = {
              diagnostics = {
                globals = { 'vim' },
              },
            },
          },
        },
        pyright = {},
        tsserver = {},
        rust_analyzer = {},
      }

      for server, config in pairs(servers) do
        config.capabilities = capabilities
        require('lspconfig')[server].setup(config)
      end
    end,
  },

  -- Autocompletion
  {
    'hrsh7th/nvim-cmp',
    dependencies = {
      'hrsh7th/cmp-nvim-lsp',
      'hrsh7th/cmp-buffer',
      'hrsh7th/cmp-path',
      'L3MON4D3/LuaSnip',
      'saadparwaiz1/cmp_luasnip',
    },
    config = function()
      local cmp = require('cmp')
      local luasnip = require('luasnip')

      cmp.setup({
        snippet = {
          expand = function(args)
            luasnip.lsp_expand(args.body)
          end,
        },
        mapping = cmp.mapping.preset.insert({
          ['<C-n>'] = cmp.mapping.select_next_item(),
          ['<C-p>'] = cmp.mapping.select_prev_item(),
          ['<C-d>'] = cmp.mapping.scroll_docs(-4),
          ['<C-f>'] = cmp.mapping.scroll_docs(4),
          ['<C-Space>'] = cmp.mapping.complete(),
          ['<CR>'] = cmp.mapping.confirm({ select = true }),
          ['<Tab>'] = cmp.mapping(function(fallback)
            if cmp.visible() then
              cmp.select_next_item()
            elseif luasnip.expand_or_jumpable() then
              luasnip.expand_or_jump()
            else
              fallback()
            end
          end, { 'i', 's' }),
          ['<S-Tab>'] = cmp.mapping(function(fallback)
            if cmp.visible() then
              cmp.select_prev_item()
            elseif luasnip.jumpable(-1) then
              luasnip.jump(-1)
            else
              fallback()
            end
          end, { 'i', 's' }),
        }),
        sources = {
          { name = 'nvim_lsp' },
          { name = 'luasnip' },
          { name = 'buffer' },
          { name = 'path' },
        },
      })
    end,
  },

  -- Formatting
  {
    'stevearc/conform.nvim',
    config = function()
      require('conform').setup({
        formatters_by_ft = {
          lua = { 'stylua' },
          python = { 'black' },
          javascript = { 'prettier' },
          typescript = { 'prettier' },
        },
      })

      vim.keymap.set('', '<leader>f', function()
        require('conform').format({ async = true, lsp_fallback = true })
      end, { desc = 'Format buffer' })
    end,
  },
}
```

### LSP Keybindings

|Key|Action|
|---|---|
|`gd`|Go to definition|
|`gr`|Go to references|
|`gI`|Go to implementation|
|`K`|Hover documentation|
|`<leader>rn`|Rename symbol|
|`<leader>ca`|Code action|
|`<leader>f`|Format buffer|
|`<C-Space>`|Trigger completion|

### Installing Language Servers

After restarting Neovim:

1. Run `:Mason`
2. Language servers will auto-install
3. Or manually install with `:MasonInstall pyright`

---

## Stage 13: Advanced Features

### Macros

Record and replay sequences of commands:

|Command|Action|
|---|---|
|`q{register}`|Start recording macro to register|
|`q`|Stop recording|
|`@{register}`|Replay macro|
|`@@`|Replay last macro|

**Example:**

1. Position cursor on first line
2. Press `qa` to start recording to register 'a'
3. Perform operations (e.g., `I"` + `Esc` + `A"` + `Esc` + `j`)
4. Press `q` to stop
5. Press `@a` to replay
6. Press `10@a` to replay 10 times

### Registers

Neovim has multiple clipboards (registers):

|Register|Purpose|
|---|---|
|`"`|Default register|
|`0`|Last yank|
|`1-9`|Delete history|
|`a-z`|Named registers|
|`+`|System clipboard|
|`*`|Selection clipboard (X11)|
|`%`|Current file name|
|`:`|Last command|
|`/`|Last search|

**Usage:**

- `"ayy` - Yank line to register 'a'
- `"ap` - Paste from register 'a'
- `"+y` - Yank to system clipboard
- `"+p` - Paste from system clipboard
- `:reg` - View all registers

### Advanced Search

|Command|Description|
|---|---|
|`/\v`|Very magic mode (fewer escapes)|
|`/\c`|Case-insensitive search|
|`/\C`|Case-sensitive search|
|`/foo\|bar`|Search for foo OR bar|
|`/\<word\>`|Match whole word|

### Global Commands

Execute commands on matching lines:

```vim
:g/pattern/command    " Execute command on lines matching pattern
:g!/pattern/command   " Execute on non-matching lines
:v/pattern/command    " Same as :g!

Examples:
:g/TODO/d             " Delete all lines with TODO
:g/^$/d               " Delete all empty lines
:g/error/p            " Print all lines with 'error'
:g/function/t$        " Copy all lines with 'function' to end
```

### Folding

|Command|Action|
|---|---|
|`zf{motion}`|Create fold|
|`zo`|Open fold|
|`zc`|Close fold|
|`za`|Toggle fold|
|`zR`|Open all folds|
|`zM`|Close all folds|
|`zd`|Delete fold|

Enable folding in config:

```lua
vim.opt.foldmethod = "indent"
vim.opt.foldlevel = 99
```

### Digraphs

Insert special characters:

1. In Insert mode, press `Ctrl-k`
2. Type two-character code
3. Special character appears

Examples:

- `Ctrl-k` + `>>` → »
- `Ctrl-k` + `<<` → «
- `Ctrl-k` + `12` → ½
- `Ctrl-k` + `Co` → ©

View all: `:digraphs`

### Diff Mode

Compare files:

```bash
nvim -d file1 file2
```

Or within Neovim:

```vim
:vertical diffsplit other_file
```

|Command|Action|
|---|---|
|`]c`|Next change|
|`[c`|Previous change|
|`do`|Obtain diff (pull from other)|
|`dp`|Put diff (push to other)|
|`:diffupdate`|Refresh diff|

### Sessions

Save and restore your workspace:

```vim
:mksession ~/mysession.vim    " Save session
nvim -S ~/mysession.vim        " Load session
```

Add to config for auto-session:

```lua
vim.keymap.set('n', '<leader>ss', ':mksession! ~/Session.vim<CR>', { desc = 'Save session' })
vim.keymap.set('n', '<leader>sr', ':source ~/Session.vim<CR>', { desc = 'Restore session' })
```

---

## Practice Exercises

### Exercise 1: Basic Editing

Create a file with random text and:

1. Navigate using only `hjkl`, `w`, `b`, `0`, `$`
2. Delete 5 words with `dw`
3. Change 3 lines with `cc`
4. Copy a paragraph with `yap`
5. Undo/redo your changes

### Exercise 2: Text Objects

Use this code:

```javascript
function hello(name) {
  console.log("Hello " + name);
  return true;
}
```

Practice:

1. `ci"` - Change text in quotes
2. `di(` - Delete contents of parentheses
3. `da{` - Delete entire function body with braces
4. `yiw` - Yank inner word
5. `gUiw` - Uppercase a word

### Exercise 3: Search & Replace

1. Search for "the": `/the`
2. Replace all "old" with "new": `:%s/old/new/g`
3. Replace with confirmation: `:%s/foo/bar/gc`
4. Replace in visual selection

### Exercise 4: Macros

Add quotes to multiple lines:

1. `qa` - Start recording
2. `I"` - Insert quote at start
3. `Esc` + `A"` - Insert quote at end
4. `Esc` + `j` - Move down
5. `q` - Stop recording
6. `10@a` - Repeat 10 times

### Exercise 5: Window Management

1. Open 3 files in splits
2. Resize windows with `Ctrl-w +/-/</>`
3. Navigate with `Ctrl-w h/j/k/l`
4. Close all but current: `Ctrl-w o`

### Exercise 6: Advanced Editing

Create a CSV file and:

1. Use block visual mode (`Ctrl-v`) to select a column
2. Delete the column with `d`
3. Insert text at start of multiple lines with `I`
4. Sort lines: `:%!sort`

---

## Cheat Sheet

### Modes

- `i` - Insert | `Esc` - Normal | `v` - Visual | `V` - Visual Line | `Ctrl-v` - Visual Block

### Movement

- `hjkl` - Left/Down/Up/Right | `w/b` - Word forward/back | `0/$` - Line start/end
- `gg/G` - File start/end | `{/}` - Paragraph | `%` - Matching bracket

### Editing

- `x` - Delete char | `dd` - Delete line | `yy` - Yank line | `p` - Paste
- `u` - Undo | `Ctrl-r` - Redo | `ciw` - Change word | `.` - Repeat

### Search

- `/pattern` - Search forward | `?pattern` - Search back | `n/N` - Next/prev
- `*/#` - Search word under cursor | `:%s/old/new/g` - Replace all

### Files

- `:e file` - Open | `:w` - Save | `:q` - Quit | `:wq` - Save & quit

### Windows

- `:sp/:vsp` - Split | `Ctrl-w w` - Cycle | `Ctrl-w h/j/k/l` - Navigate

### Advanced

- `qa...q` - Record macro | `@a` - Replay | `"ay` - Yank to register a
- `gd` - Go to definition | `K` - Hover | `<leader>rn` - Rename

---

## Learning Path Summary

### Week 1: Basics

- Learn modes and basic navigation
- Practice hjkl movement
- Master insert/normal mode switching
- Basic editing: delete, yank, paste

### Week 2: Efficiency

- Text objects and operators
- Advanced movement (f/t, {/}, gg/G)
- Visual mode selections
- Search and replace

### Week 3: Workflow

- Windows and buffers
- Basic configuration
- Install plugin manager
- Add essential plugins

### Week 4: Advanced

- LSP and autocomplete
- Custom keybindings
- Macros and registers
- Language-specific setup

### Ongoing

- Learn one new command per day
- Disable arrow keys to force good habits
- Gradually add plugins as needed
- Read `:help` for features you use often

---

## Additional Resources

### Built-in Help

- `:help` - Main help
- `:help <command>` - Help for specific command
- `:Tutor` - Interactive tutorial
- `:help quickref` - Quick reference

### Learning Tools

- `vimtutor` - Command-line tutorial (30 min)
- vim-adventures.com - Game to learn Vim
- openvim.com - Interactive tutorial

### Configuration Examples

- github.com/nvim-lua/kickstart.nvim - Minimal starter config
- github.com/LazyVim/LazyVim - Feature-rich distro
- github.com/NvChad/NvChad - Beautiful UI

### Communities

- r/neovim - Reddit community
- github.com/neovim/neovim/discussions - Official discussions
- neovim.discourse.group - Forum

---

## Tips for Success

1. **Start small** - Don't try to learn everything at once
2. **Disable arrow keys** - Forces you to use hjkl
3. **One new command per day** - Gradual improvement
4. **Use vimtutor** - 30 minutes well spent
5. **Don't copy complex configs** - Build your own understanding
6. **Read :help** - It's comprehensive and well-written
7. **Join community** - Ask questions, share configs
8. **Be patient** - 2-3 weeks to feel comfortable, months to master
9. **Customize gradually** - Add plugins only when you need them
10. **Practice daily** - Even 15 minutes helps

Remember: You'll be slower for the first 1-2 weeks. That's normal! The investment pays off enormously once you build muscle memory.

Happy Vimming! 🚀