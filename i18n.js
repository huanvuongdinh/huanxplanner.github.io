/* global React, window */
/* Lightweight i18n — broadcasts language changes to subscribers */

(function () {
  const KEY = 'hxp.lang';
  const initial = (() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved === 'en' || saved === 'vi') return saved;
    } catch (e) {}
    return 'en';
  })();

  const subs = new Set();
  let current = initial;
  document.documentElement.setAttribute('lang', current);

  window.HXPLang = {
    get: () => current,
    set: (next) => {
      if (next !== 'en' && next !== 'vi') return;
      current = next;
      try { localStorage.setItem(KEY, next); } catch (e) {}
      document.documentElement.setAttribute('lang', next);
      subs.forEach(fn => fn(next));
    },
    subscribe: (fn) => { subs.add(fn); return () => subs.delete(fn); },
  };

  /* React hook — re-renders consumer when lang changes */
  window.useLang = function useLang() {
    const [lang, setLang] = React.useState(window.HXPLang.get());
    React.useEffect(() => window.HXPLang.subscribe(setLang), []);
    return lang;
  };

  /* helper: t(en, vi) returns the active variant */
  window.t = function t(en, vi) {
    return window.HXPLang.get() === 'vi' ? vi : en;
  };
})();
