/**
 * BERI Landing Page - Main JavaScript
 * Handles mobile navigation toggle
 */

(function() {
    'use strict';
    
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            navToggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle active class
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a nav link
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 768) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnToggle = navToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            }
        }
    });
    
    // Smooth scroll with offset for sticky header
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for href="#" (logo link)
            if (href === '#') {
                return;
            }
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Handle image loading error (show placeholder)
    const tabletImage = document.querySelector('.tablet-screenshot');
    if (tabletImage) {
        tabletImage.addEventListener('error', function() {
            this.style.display = 'none';
            const placeholder = document.querySelector('.tablet-placeholder');
            if (placeholder) {
                placeholder.style.display = 'flex';
            }
        });
    }
})();
