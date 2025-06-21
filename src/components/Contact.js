import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaBehance, FaDownload, FaCalendarAlt } from 'react-icons/fa';

const contactLinks = [
	{
		href: 'https://outlook.live.com/owa/?path=/mail/action/compose&to=Vivekkumar2601@hotmail.com&subject=Regarding Work Discuss Vivek&body=Hi Vivek,',
		icon: FaEnvelope,
		label: 'Contact me via email',
		aria: 'Contact me via email',
	},
	{
		href: 'https://www.linkedin.com/in/vivek-kumar-463a19244/',
		icon: FaLinkedin,
		label: 'Message me on LinkedIn',
		aria: 'Message me on LinkedIn',
	},
	{
		href: 'https://www.behance.net/vivekdesigner',
		icon: FaBehance,
		label: 'Check out my Behance profile',
		aria: 'Download CV',
	},
	{
		href: 'https://drive.google.com/file/d/1KAh6EgBt48YxOP4tc7goSEL-J2Y3aa8A/view?usp=drive_link',
		icon: FaDownload,
		label: 'Download Resume',
		aria: 'Download CV',
	},
	{
		href: 'https://calendly.com/vivek2601',
		icon: FaCalendarAlt,
		label: 'Book a Meeting (Calendly)',
		aria: 'Book a Meeting',
	},
];

const iconVariants = {
	initial: { scale: 1, rotate: 0 },
	hover: { scale: 1.18, rotate: -10, transition: { type: 'spring', stiffness: 400, damping: 10 } },
};

const Contact = () => (
	<motion.section
		id="contact-us"
		className="contact-us-section"
		aria-labelledby="contact-us-heading"
		initial={{ opacity: 0, y: 40 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true, amount: 0.3 }}
		transition={{ duration: 0.4, delay: 0.05 }}
	>
		<div className="container">
			<motion.h2
				id="contact-us-heading"
				className="fade-in-up"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3, delay: 0.08 }}
			>
				CONTACT
			</motion.h2>
			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.3, delay: 0.12 }}
			>
				Got a project or just want to connect? Let’s chat! Reach out via email, LinkedIn, or Behance — I’m always open to new ideas and collaborations.
			</motion.p>
			<motion.div
				style={{ fontSize: '1.1rem', lineHeight: 1.5 }}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={{
					visible: { transition: { staggerChildren: 0.04, delayChildren: 0.16 } },
				}}
			>
				{contactLinks.map((link, idx) => (
					<motion.p
						key={link.href}
						variants={{
							hidden: { opacity: 0, y: 20 },
							visible: { opacity: 1, y: 0 },
						}}
						transition={{ duration: 0.2 }}
					>
						<a
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={link.aria}
							style={{ fontSize: '1em', display: 'inline-flex', alignItems: 'center' }}
						>
							<motion.span
								style={{ marginRight: '0.3em', fontSize: '1.15em', display: 'inline-flex', alignItems: 'center' }}
								variants={iconVariants}
								initial="initial"
								whileHover="hover"
								whileTap="hover"
							>
								<link.icon />
							</motion.span>
							{link.label}
						</a>
					</motion.p>
				))}
			</motion.div>
		</div>
	</motion.section>
);

export default Contact;
