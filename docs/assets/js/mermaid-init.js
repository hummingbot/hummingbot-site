document.addEventListener('DOMContentLoaded', function() {
    // Initialize Mermaid with configuration
    mermaid.initialize({
        startOnLoad: true,
        theme: 'default',
        themeVariables: {
            primaryColor: '#5FFFD7',
            primaryTextColor: '#151819',
            primaryBorderColor: '#5FFFD7',
            lineColor: '#5FFFD7',
            secondaryColor: '#151819',
            tertiaryColor: '#ffffff'
        },
        flowchart: {
            useMaxWidth: true,
            htmlLabels: true
        },
        sequence: {
            useMaxWidth: true,
            wrap: true
        },
        gantt: {
            useMaxWidth: true
        },
        journey: {
            useMaxWidth: true
        },
        gitGraph: {
            useMaxWidth: true
        }
    });

    // Re-render mermaid diagrams when content changes (for dynamic content)
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList') {
                const mermaidElements = document.querySelectorAll('.mermaid');
                mermaidElements.forEach(function(element) {
                    if (!element.getAttribute('data-processed')) {
                        mermaid.init(undefined, element);
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Handle theme switching
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-md-color-scheme]')) {
            setTimeout(function() {
                const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';
                const theme = isDark ? 'dark' : 'default';
                
                mermaid.initialize({
                    startOnLoad: true,
                    theme: theme,
                    themeVariables: isDark ? {
                        primaryColor: '#5FFFD7',
                        primaryTextColor: '#ffffff',
                        primaryBorderColor: '#5FFFD7',
                        lineColor: '#5FFFD7',
                        secondaryColor: '#151819',
                        tertiaryColor: '#2a2a2a'
                    } : {
                        primaryColor: '#5FFFD7',
                        primaryTextColor: '#151819',
                        primaryBorderColor: '#5FFFD7',
                        lineColor: '#5FFFD7',
                        secondaryColor: '#151819',
                        tertiaryColor: '#ffffff'
                    }
                });
                
                // Re-render all mermaid diagrams
                const mermaidElements = document.querySelectorAll('.mermaid');
                mermaidElements.forEach(function(element) {
                    element.removeAttribute('data-processed');
                    element.innerHTML = element.textContent;
                });
                mermaid.init(undefined, '.mermaid');
            }, 100);
        }
    });
});
