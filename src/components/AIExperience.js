import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';


const aiExperienceData = [
  {
	img: 'images/Ai/maxresdefault.jpg',
	alt: 'AI-Powered Design Tools',
	title: 'AI-Powered Design Tools',
	desc: 'Leveraging cutting-edge AI tools for rapid prototyping, creative exploration, and professional design workflows.',
	tools: [
	  { name: 'Midjourney', icon: 'fas fa-palette', url: 'https://www.midjourney.com/' },
	  { name: 'DALL-E', icon: 'fas fa-robot', url: 'https://openai.com/research/publications/dall-e' },
	  { name: 'Stable Diffusion', icon: 'fas fa-magic', url: 'https://stability.ai/' },
	  // FontAwesome does not have a dedicated Firefly icon. If 'fab fa-adobe' does not show, fallback to a generic icon:
	  { name: 'Adobe Firefly', icon: 'fas fa-fire', url: 'https://firefly.adobe.com/' },
	  { name: 'Figma AI', icon: 'fab fa-figma', url: 'https://www.figma.com/ai/' },
	  { name: 'Photoshop AI', icon: 'fas fa-layer-group', url: 'https://www.adobe.com/products/photoshop.html' }
	]
  },
	{
	img: 'images/Ai/ChatGPT-Logo.jpg',
		alt: 'Conversational AI Interfaces',
		title: 'Conversational AI & Code Generation',
		desc: 'Designing intelligent interfaces and utilizing AI-powered development tools for enhanced productivity.',
	tools: [
	  { name: 'ChatGPT', icon: 'fas fa-comments', url: 'https://chat.openai.com/' },
	  { name: 'Claude', icon: 'fas fa-brain', url: 'https://claude.ai/' },
	  { name: 'GitHub Copilot', icon: 'fab fa-github', url: 'https://github.com/features/copilot' },
	  { name: 'Lovable', icon: 'fas fa-heart', url: 'https://www.lovable.so/' },
	  { name: 'Cursor AI', icon: 'fas fa-code', url: 'https://www.cursor.so/' },
	  { name: 'Google Stitch', icon: 'fab fa-google', url: 'https://cloud.google.com/stitch' }
	]
	},
	{
	img: 'images/Ai/logo-vertical.png',
		alt: 'Development & Analytics Tools',
		title: 'AI Development & Analytics',
		desc: 'Building applications with AI-powered backend services and creating intelligent data visualizations.',
	tools: [
	  { name: 'Firebase AI', icon: 'fab fa-google', url: 'https://firebase.google.com/solutions/ai' },
	  { name: 'Supabase', icon: 'fas fa-database', url: 'https://supabase.com/' },
	  { name: 'Vercel AI', icon: 'fas fa-rocket', url: 'https://vercel.com/ai' },
	  { name: 'OpenAI API', icon: 'fas fa-plug', url: 'https://platform.openai.com/' },
	  { name: 'Anthropic API', icon: 'fas fa-microchip', url: 'https://docs.anthropic.com/' },
	  { name: 'Hugging Face', icon: 'fas fa-smile', url: 'https://huggingface.co/' }
	]
	},
	{
	img: 'images/Ai/78a0039d-8bb0-4e5c-aafa-37e77a1e3779_3096x1854.jpg',
		alt: 'AI Design Automation',
		title: 'AI Design Automation & Workflows',
		desc: 'Implementing AI-driven design systems, automated content generation, and intelligent design workflows.',
	tools: [
	  { name: 'Framer AI', icon: 'fas fa-cube', url: 'https://www.framer.com/ai/' },
	  { name: 'Webflow AI', icon: 'fas fa-globe', url: 'https://webflow.com/ai' },
	  { name: 'Notion AI', icon: 'fas fa-sticky-note', url: 'https://www.notion.so/product/ai' },
	  { name: 'Zapier AI', icon: 'fas fa-bolt', url: 'https://zapier.com/blog/ai/' },
	  { name: 'Make.com', icon: 'fas fa-cogs', url: 'https://www.make.com/en/ai' },
	  { name: 'Airtable AI', icon: 'fas fa-table', url: 'https://www.airtable.com/ai' }
	]
	},
  {
	img: 'images/Ai/6502557c264c2fcc9e8509d5_Hotjar.svg',
	alt: 'AI UX Research',
	title: 'AI-Enhanced UX Research & Testing',
	desc: 'Utilizing AI tools for user research analysis, behavioral insights, and data-driven design decisions.',
	tools: [
  { name: 'Hotjar AI', icon: 'fas fa-eye', url: 'https://www.hotjar.com/ai/' },
  { name: 'Maze AI', icon: 'fas fa-puzzle-piece', url: 'https://maze.co/ai/' },
  { name: 'UserTesting AI', icon: 'fas fa-users', url: 'https://www.usertesting.com/platform/ai' },
  { name: 'Lookback', icon: 'fas fa-video', url: 'https://www.lookback.com/' },
  { name: 'Dovetail AI', icon: 'fas fa-search', url: 'https://dovetail.com/ai/' },
  { name: 'Typeform AI', icon: 'fas fa-poll', url: 'https://www.typeform.com/ai/' }
	]
  },
  {
	img: 'images/Ai/tensorflow-la-gi-9-1030x659.webp',
	alt: 'Next-Gen AI Interfaces',
	title: 'Emerging AI Technologies',
	desc: 'Exploring cutting-edge AI interfaces including voice assistants, AR/VR experiences, and spatial computing.',
	tools: [
  { name: 'Unity AI', icon: 'fab fa-unity', url: 'https://unity.com/solutions/ai' },
  { name: 'Meta AI', icon: 'fab fa-meta', url: 'https://ai.meta.com/' },
  { name: 'Google AI', icon: 'fab fa-google', url: 'https://ai.google/' },
  { name: 'Apple Core ML', icon: 'fab fa-apple', url: 'https://developer.apple.com/machine-learning/' },
  { name: 'TensorFlow', icon: 'fas fa-brain', url: 'https://www.tensorflow.org/' },
  { name: 'Three.js AI', icon: 'fas fa-cube', url: 'https://threejs.org/' }
	]
  }
];

const AIExperience = () => {
	const { t } = useTranslation();

	return (
		<section id="ai-experience" className="ai-experience-section" aria-labelledby="ai-experience-heading">
			<div className="container">
				<h2 id="ai-experience-heading">{t('AI EXPERIENCE & EXPERTISE')}</h2>
				<p>
					{t(
						'As a designer at the forefront of AI innovation, I specialize in creating intelligent user experiences that seamlessly integrate artificial intelligence. From AI-powered design tools to conversational interfaces, I help bridge the gap between cutting-edge technology and human-centered design.'
					)}
				</p>
				<section className="ai-experience-intro-details">
				  <h3 className="ai-experience-intro-title">
					I leverage the latest AI and automation tools to accelerate design and development while ensuring top-quality user experiences:
				  </h3>
				  <ul className="ai-experience-intro-list">
<li><b>GitHub Copilot + GPT + Claude</b> I use these AI coding assistants inside Visual Studio to rapidly generate React components, optimize code structure, and prototype interactive features — cutting development time from hours to minutes.</li>
<li><b>Firebase</b> With Firebase, I can design, prototype, and launch functional web or mobile apps in minutes, complete with authentication, real-time databases, and hosting — ensuring both speed and scalability.</li>
<li><b>MidJourney & Stable Diffusion</b> These tools help me create custom illustrations, icons, and concept visuals that align perfectly with a project’s branding and user experience goals.</li>
<li><b>Runway & After Effects (AI-enhanced)</b> I enhance UI storytelling with AI-powered motion graphics, video assets, and interactive design elements for high-impact visuals.</li>
<li><b>Uizard & Galileo AI</b> I transform ideas and sketches into ready-to-use UI designs instantly, enabling rapid prototyping and iteration for client presentations.</li>
<li><b>Miro + FigJam AI Plugins</b> I streamline ideation, journey mapping, and brainstorming sessions with AI that helps cluster ideas, generate user personas, and analyze feedback.</li>
<li><b>AI Usability Testing Tools</b> By simulating user interactions and analyzing heatmaps, I can validate designs quickly and refine usability before real-world testing.</li>
<li><b>Accessibility Checkers (AI-driven)</b> I ensure my designs meet WCAG standards using AI-powered accessibility tools that catch issues early and suggest instant fixes.</li>
				  </ul>
				</section>
				<div className="ai-experience-grid">
					{aiExperienceData.map((experience, index) => (
						<motion.div
							key={index}
							className="ai-experience-card"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.3 }}
							transition={{ duration: 0.3, delay: index * 0.1 }}
						>
							<div className="ai-experience-image-wrapper">
								<img
									src={experience.img.replace(/\\/g, '/')}
									alt={experience.alt}
									className="ai-experience-image"
								/>
							</div>
							<div className="ai-experience-content">
								<h3 className="ai-experience-title">{experience.title}</h3>
								<p className="ai-experience-desc">{experience.desc}</p>
								<div className="ai-tools-grid">
				   {experience.tools.map((tool, toolIndex) => (
					 <a
					   key={toolIndex}
					   className="ai-tool-item"
					   href={tool.url}
					   target="_blank"
					   rel="noopener noreferrer"
					   title={tool.name}
					 >
					   <i className={tool.icon}></i>
					   <span className="tool-name">{tool.name}</span>
					 </a>
				   ))}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AIExperience;
