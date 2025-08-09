/**
 * Mobile-specific fixes for buttons and touch interactions
 */

(function() {
    // Fix for iOS and Android touch event issues
    document.addEventListener('DOMContentLoaded', function() {
        // Detect if device is mobile
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        if (isMobile) {
            // Apply specific mobile fixes
            fixMobileButtons();
            preventZoomOnDoubleTap();
            fixScrollIssues();
        }
    });
    
    function fixMobileButtons() {
        // Special Message Button Fix
        const specialBtn = document.querySelector('.special-button');
        if (specialBtn) {
            // Remove existing onclick
            specialBtn.removeAttribute('onclick');
            
            // Add touch-specific event listeners
            specialBtn.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
            }, {passive: true});
            
            specialBtn.addEventListener('touchend', function(e) {
                this.classList.remove('touch-active');
                e.preventDefault();
                showSpecialMessage();
            }, {passive: false});
        }
        
        // Journey Button Fix
        const journeyBtn = document.querySelector('.minimal-button');
        if (journeyBtn) {
            // Remove existing onclick
            journeyBtn.removeAttribute('onclick');
            
            // Add touch-specific event listeners
            journeyBtn.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
            }, {passive: true});
            
            journeyBtn.addEventListener('touchend', function(e) {
                this.classList.remove('touch-active');
                e.preventDefault();
                window.location.href = 'journey.html';
            }, {passive: false});
        }
        
        // Begin Button Fix
        const beginBtn = document.querySelector('.begin-button');
        if (beginBtn) {
            // Remove existing onclick
            beginBtn.removeAttribute('onclick');
            
            // Add touch-specific event listeners
            beginBtn.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
            }, {passive: true});
            
            beginBtn.addEventListener('touchend', function(e) {
                this.classList.remove('touch-active');
                e.preventDefault();
                revealContent();
            }, {passive: false});
        }
        
        // Quality items fix
        const qualityItems = document.querySelectorAll('.quality');
        qualityItems.forEach(function(item) {
            // Remove existing onclick
            item.removeAttribute('onclick');
            
            // Add touch-specific event listeners
            item.addEventListener('touchstart', function(e) {
                this.classList.add('touch-active');
            }, {passive: true});
            
            item.addEventListener('touchend', function(e) {
                this.classList.remove('touch-active');
                e.preventDefault();
                
                // Remove highlight from all qualities
                document.querySelectorAll('.quality').forEach(function(q) {
                    q.classList.remove('highlight');
                });
                
                // Add highlight to this quality
                this.classList.add('highlight');
            }, {passive: false});
        });
    }
    
    function preventZoomOnDoubleTap() {
        // Prevent zoom on double tap for interactive elements
        document.addEventListener('touchend', function(e) {
            if (e.target.classList.contains('special-button') || 
                e.target.classList.contains('minimal-button') ||
                e.target.classList.contains('begin-button') ||
                e.target.classList.contains('quality')) {
                e.preventDefault();
            }
        }, {passive: false});
    }
    
    function fixScrollIssues() {
        // Fix for iOS body scrolling when touching buttons
        document.addEventListener('touchmove', function(e) {
            if (e.target.classList.contains('special-button') || 
                e.target.classList.contains('minimal-button') ||
                e.target.classList.contains('begin-button') ||
                e.target.classList.contains('quality')) {
                e.preventDefault();
            }
        }, {passive: false});
    }
})();
