(function() {

    let location_label = document.getElementById('current-location');

    function handleClick(event) {
        event.preventDefault();
        console.log('Go to: ' + this.href);
        history.pushState({}, 'Loc: ' + this.href, this.href);
        updatePage();
    }

    var anchors = document.getElementsByTagName('a');
    Array.prototype.forEach.call(anchors, function(el) {
        el.addEventListener('click', handleClick.bind(el));
    });

    window.onpopstate = function() {
        console.log('[popstate] location: ' + document.location);
        updatePage();
    };

    function updatePage() {
        let path = document.location.pathname;
        document.title = 'SPAS demo: ' + path;
        location_label.textContent = path;
    }

    updatePage();

    setInterval(function() {
        Array.prototype.forEach.call(document.getElementsByTagName('marquee'), function(el) {
            el.classList.toggle('invert');
        });
    }, 1000);

})();
