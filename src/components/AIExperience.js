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
				<section className="ai-tools-experience-section" style={{background:'#fafdff',borderRadius:16,boxShadow:'0 2px 12px 0 rgba(0,95,204,0.06)',padding:'2.2rem 1.5rem 2.1rem 1.5rem',margin:'0 0 2.5rem 0',border:'1px solid #e3eaf3'}}>
				  <div style={{marginBottom:'1.2rem'}}>
					<h3 className="ai-tools-experience-title" style={{marginBottom:8}}>
					  My AI & Automation Toolkit
					</h3>
					<div style={{fontSize:'1.08rem',color:'#444',marginBottom:12}}>
					  I leverage the latest AI and automation tools to accelerate design and development while ensuring top-quality user experiences. Here are some of my favorites:
					</div>
				  </div>
				  <div style={{borderTop:'1px solid #e3eaf3',margin:'0 0 1.5rem 0'}}></div>
				  <div className="ai-tools-experience-list" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))',gap:'1.3rem 2.2rem',padding:0,listStyle:'none',margin:0}}>
					{/* Tool Card 1 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-code-branch"></i></span>
					  <div>
						<a href="https://github.com/features/copilot" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>GitHub Copilot + GPT + Claude</a>
						<div className="ai-tool-desc">I use these AI coding assistants inside Visual Studio to rapidly generate React components, optimize code structure, and prototype interactive features — cutting development time from hours to minutes.</div>
					  </div>
					</div>
					{/* Tool Card 2 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fab fa-google"></i></span>
					  <div>
						<a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>Firebase</a>
						<div className="ai-tool-desc">With Firebase, I can design, prototype, and launch functional web or mobile apps in minutes, complete with authentication, real-time databases, and hosting — ensuring both speed and scalability.</div>
					  </div>
					</div>
					{/* Tool Card 3 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-palette"></i></span>
					  <div>
						<a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>MidJourney & Stable Diffusion</a>
						<div className="ai-tool-desc">These tools help me create custom illustrations, icons, and concept visuals that align perfectly with a project’s branding and user experience goals.</div>
					  </div>
					</div>
					{/* Tool Card 4 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-film"></i></span>
					  <div>
						<a href="https://runwayml.com/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>Runway & After Effects (AI-enhanced)</a>
						<div className="ai-tool-desc">I enhance UI storytelling with AI-powered motion graphics, video assets, and interactive design elements for high-impact visuals.</div>
					  </div>
					</div>
					{/* Tool Card 5 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-bolt"></i></span>
					  <div>
						<a href="https://uizard.io/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>Uizard & Galileo AI</a>
						<div className="ai-tool-desc">I transform ideas and sketches into ready-to-use UI designs instantly, enabling rapid prototyping and iteration for client presentations.</div>
					  </div>
					</div>
					{/* Tool Card 6 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-project-diagram"></i></span>
					  <div>
						<a href="https://miro.com/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>Miro + FigJam AI Plugins</a>
						<div className="ai-tool-desc">I streamline ideation, journey mapping, and brainstorming sessions with AI that helps cluster ideas, generate user personas, and analyze feedback.</div>
					  </div>
					</div>
					{/* Tool Card 7 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-users"></i></span>
					  <div>
						<a href="https://www.usertesting.com/platform/ai" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>AI Usability Testing Tools</a>
						<div className="ai-tool-desc">By simulating user interactions and analyzing heatmaps, I can validate designs quickly and refine usability before real-world testing.</div>
					  </div>
					</div>
					{/* Tool Card 8 */}
					<div className="ai-tool-card" style={{background:'#fff',borderRadius:12,boxShadow:'0 1px 4px rgba(0,0,0,0.04)',padding:'1.1rem 1.2rem',display:'flex',alignItems:'flex-start',gap:'1.1rem'}}>
					  <span className="ai-tool-icon" style={{fontSize:'2.1rem',color:'#005fcc',marginTop:2}}><i className="fas fa-universal-access"></i></span>
					  <div>
						<a href="https://www.deque.com/axe/" target="_blank" rel="noopener noreferrer" className="ai-tool-title" style={{fontWeight:600,fontSize:'1.08rem',color:'#222',textDecoration:'none'}}>Accessibility Checkers (AI-driven)</a>
						<div className="ai-tool-desc">I ensure my designs meet WCAG standards using AI-powered accessibility tools that catch issues early and suggest instant fixes.</div>
					  </div>
					</div>
				  </div>
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
