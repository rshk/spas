(function() {

    let loc_path = document.getElementById('loc-path');
    let loc_search = document.getElementById('loc-search');
    let loc_hash = document.getElementById('loc-hash');

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
        loc_path.textContent = decodeURIComponent(path);
        loc_search.textContent = decodeURIComponent(document.location.search);
        loc_hash.textContent = decodeURIComponent(document.location.hash);

        document.getElementById('wtf').style.display =
            (path == '/omg/wtf/bbq') ? '': 'none';
    }

    updatePage();

    setInterval(function() {
        Array.prototype.forEach.call(document.getElementsByTagName('marquee'), function(el) {
            el.classList.toggle('invert');
        });
    }, 1000);

})();
