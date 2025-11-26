# Giphy Search – Project 2
**Author:** Loida Marquina  
**Live Demo:** https://loidamarquina.github.io/project_2_giphy_search/  

## Overview
Giphy Search is a simple web application that allows users to search for GIFs using the **Giphy API**.  
The user can enter a search term, view results in a responsive grid layout, and navigate through pages using **Prev** and **Next** buttons.

## Features
- Search bar to query GIFs  
- Fetch requests to the Giphy API  
- Responsive GIF gallery displayed in cards  
- Mobile-first design  
- Pagination controls (Page number + Prev/Next)  
- Basic accessibility (ARIA roles, focus states)  
- Desktop & Mobile wireframes + wireflow included

## Technologies Used
- **HTML5** – structure  
- **CSS3** – design, layout, responsiveness  
- **JavaScript (Vanilla JS)** – logic, API calls, pagination  
- **Giphy API**

## How It Works
1. Type a keyword into the “Search GIFs…” input field.  
2. Click **Search**.  
3. GIFs load into the grid layout.  
4. Use **Prev** and **Next** to navigate between pages.  

## Wireframes & Wireflow
Both **desktop** and **mobile** wireframes are included, showing:
- Initial screen  
- Results screen  
- Page flow  
- Layout and component positioning  

## File Structure
```
project/
│── index.html
│── /css
│     └── style.css
│── /js
│     └── main.js
```

## Future Improvements
- Add a loading animation while GIFs are being fetched  
- Add a dark/light theme toggle  
- Add a modal to view GIF details (title, source, link, etc.)  
- Save recent searches  
- Improve error handling for empty or failed searches  
