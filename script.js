document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        currentPage: window.location.pathname.split('/').pop().replace('.html', '') || 'index',
        activeTool: 'slimfetch',
        setActiveTool(tool) {
            this.activeTool = tool;
        }
    }));
});
