# To-Do List Chrome Extension

This is a simple Chrome extension that allows users to manage a to-do list with customizable priorities. Users can add tasks, assign them a priority (Low, Medium, or High), and clear them from the list. The extension stores the tasks in the browser's `localStorage`, so they persist even after the browser is closed and reopened.

## Features

- Add tasks with priorities (Low, Medium, High).
- Persistent storage using `localStorage` for tasks.
- Clear all tasks functionality.
- Tasks are displayed with corresponding priority emojis.
- Lightweight and responsive popup UI.

## Future additions

- Task editing;
- Task Due dates selected by user
- Task Due dates notifications, turned on/off by user
- Categories for tasks (groups)
- Task sorting by priority
- Progress tracking for each individual task

## Technologies Used

- **HTML**: Provides the structure of the extension's popup.
- **CSS**: Handles the styling and layout of the popup.
- **JavaScript (Vanilla)**: Handles the core logic for adding tasks, setting priorities, and storing tasks in `localStorage`.

## Installation

Follow these steps to install the extension in Chrome:

1. Clone or download this repository to your local machine.

   ```bash
   git clone https://github.com/MajorDP/to-do-list-chrome-extention

   ```

2. Open Chrome and navigate to chrome://extensions/.

3. Enable Developer mode (toggle in the top right).

4. Click Load unpacked and select the folder where the extension files are located.

5. The extension will be added to your browser. You should now see the extension icon in the Chrome toolbar.
