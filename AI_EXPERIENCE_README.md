# AI Experience Section - Setup Instructions

## Overview
A new AI Experience section has been added to your portfolio website to showcase your artificial intelligence expertise and experience. The section has been designed to match your website's existing design system and styling.

## What's Been Added

### 1. New Component: `AIExperience.js`
- Location: `src/components/AIExperience.js`
- Features: Interactive cards showcasing different AI skills and technologies
- Styling: Matches website's design system with consistent colors, fonts, and spacing
- Animation: Smooth scroll animations using Framer Motion
- Tools Display: Shows specific AI tools with icons and names

### 2. Navigation Update
- Added "AI Experience" link to the main navigation in `Header.js`
- Links to the new section with ID `#ai-experience`

### 3. App Structure Update
- Added AIExperience component to main `App.js`
- Positioned between TrustedBrands and LatestProjects sections

### 4. CSS Integration
- Added styles to main `style.css` file to maintain consistency
- Includes proper dark mode support
- Follows existing design patterns and spacing guidelines

## Image Setup Required

You need to add 6 images to the following directory:
`public/images/AI-Experience/`

### Required Images:
1. `ai-design-tools.jpg` - AI-powered design tools showcase
2. `chatbot-interfaces.jpg` - Conversational AI interfaces
3. `ml-dashboards.jpg` - Machine learning analytics dashboards
4. `ai-automation.jpg` - AI design automation tools
5. `ai-research.jpg` - AI-enhanced UX research
6. `future-interfaces.jpg` - Next-generation AI interfaces

### Recommended Image Specifications:
- Dimensions: 600x400px or similar 3:2 aspect ratio
- Format: JPG or PNG
- File size: Under 500KB each for optimal loading
- Content: Professional, technology-focused imagery

## AI Experience Categories & Tools Included

1. **AI-Powered Design Tools**
   - Midjourney, DALL-E, Stable Diffusion, Adobe Firefly, Figma AI, Photoshop AI

2. **Conversational AI & Code Generation**
   - ChatGPT, Claude, GitHub Copilot, Lovable, Cursor AI, Tabnine

3. **AI Development & Analytics**
   - Firebase AI, Supabase, Vercel AI, OpenAI API, Anthropic API, Hugging Face

4. **AI Design Automation & Workflows**
   - Framer AI, Webflow AI, Notion AI, Zapier AI, Make.com, Airtable AI

5. **AI-Enhanced UX Research & Testing**
   - Hotjar AI, Maze AI, UserTesting AI, Lookback, Dovetail AI, Typeform AI

6. **Emerging AI Technologies**
   - Unity AI, Meta AI, Google AI, Apple Core ML, TensorFlow, Three.js AI

## Tool Display Features
- Each category shows 6 relevant AI tools
- Tools are displayed with FontAwesome icons
- Interactive hover effects with color transitions
- Grid layout that adapts to different screen sizes
- Consistent with website's color scheme (#005fcc primary blue)

## Customization

### To modify the AI experience content:
1. Edit the `aiExperienceData` array in `src/components/AIExperience.js`
2. Update titles, descriptions, and tool lists as needed
3. Add or remove experience cards by modifying the array
4. Change tool icons by updating the FontAwesome class names

### To change styling:
1. Modify the CSS styles in `src/style.css` under the "AI Experience Section Styles" section
2. Adjust colors, animations, and layout properties
3. Update responsive breakpoints in the media queries
4. Colors follow the website's design system: #005fcc (primary), #333 (text), #fff (background)

### To add new tools:
1. Add new tool objects to the `tools` array in each category
2. Include `name` and `icon` properties
3. Use FontAwesome icon classes (e.g., 'fas fa-robot', 'fab fa-google')
4. Consider the grid layout (6 tools per category works best)

## Development Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages (if configured)
npm run deploy
```

## Notes
- The section is fully responsive and includes dark mode support
- Uses Framer Motion for smooth animations
- Integrates with your existing translation system (react-i18next)
- Maintains design consistency with other sections
