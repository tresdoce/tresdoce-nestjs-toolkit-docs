'use strict';
(self.webpackChunktresdoce_nestjs_toolkit_docs =
  self.webpackChunktresdoce_nestjs_toolkit_docs || []).push([
  [948],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => p, kt: () => m });
      var o = r(7294);
      function n(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, o);
        }
        return r;
      }
      function a(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? l(Object(r), !0).forEach(function (t) {
                n(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : l(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          o,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              o,
              n = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++) (r = l[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (r = l[o]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
        }
        return n;
      }
      var s = o.createContext({}),
        c = function (e) {
          var t = o.useContext(s),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : a(a({}, t), e)), r;
        },
        p = function (e) {
          var t = c(e.components);
          return o.createElement(s.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return o.createElement(o.Fragment, {}, t);
          },
        },
        g = o.forwardRef(function (e, t) {
          var r = e.components,
            n = e.mdxType,
            l = e.originalType,
            s = e.parentName,
            p = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            g = c(r),
            m = n,
            f = g[''.concat(s, '.').concat(m)] || g[m] || u[m] || l;
          return r
            ? o.createElement(f, a(a({ ref: t }, p), {}, { components: r }))
            : o.createElement(f, a({ ref: t }, p));
        });
      function m(e, t) {
        var r = arguments,
          n = t && t.mdxType;
        if ('string' == typeof e || n) {
          var l = r.length,
            a = new Array(l);
          a[0] = g;
          var i = {};
          for (var s in t) hasOwnProperty.call(t, s) && (i[s] = t[s]);
          (i.originalType = e), (i.mdxType = 'string' == typeof e ? e : n), (a[1] = i);
          for (var c = 2; c < l; c++) a[c] = r[c];
          return o.createElement.apply(null, a);
        }
        return o.createElement.apply(null, r);
      }
      g.displayName = 'MDXCreateElement';
    },
    3352: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => s,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => c,
        });
      var o = r(7462),
        n = (r(7294), r(3905));
      const l = {
          slug: 'long-blog-post',
          title: 'Long Blog Post',
          authors: 'endi',
          tags: ['hello', 'docusaurus'],
        },
        a = void 0,
        i = {
          permalink: '/blog/long-blog-post',
          source: '@site/blog/2019-05-29-long-blog-post.md',
          title: 'Long Blog Post',
          description: 'This is the summary of a very long blog post,',
          date: '2019-05-29T00:00:00.000Z',
          formattedDate: '29 de mayo de 2019',
          tags: [
            { label: 'hello', permalink: '/blog/tags/hello' },
            { label: 'docusaurus', permalink: '/blog/tags/docusaurus' },
          ],
          readingTime: 2.05,
          truncated: !0,
          authors: [
            {
              name: 'Endilie Yacop Sucipto',
              title: 'Maintainer of Docusaurus',
              url: 'https://github.com/endiliey',
              imageURL: 'https://github.com/endiliey.png',
              key: 'endi',
            },
          ],
          frontMatter: {
            slug: 'long-blog-post',
            title: 'Long Blog Post',
            authors: 'endi',
            tags: ['hello', 'docusaurus'],
          },
          prevItem: { title: 'MDX Blog Post', permalink: '/blog/mdx-blog-post' },
          nextItem: { title: 'First Blog Post', permalink: '/blog/first-blog-post' },
        },
        s = { authorsImageUrls: [void 0] },
        c = [],
        p = { toc: c };
      function u(e) {
        let { components: t, ...r } = e;
        return (0, n.kt)(
          'wrapper',
          (0, o.Z)({}, p, r, { components: t, mdxType: 'MDXLayout' }),
          (0, n.kt)('p', null, 'This is the summary of a very long blog post,'),
          (0, n.kt)(
            'p',
            null,
            'Use a ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '\x3c!--'),
            ' ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, 'truncate'),
            ' ',
            (0, n.kt)('inlineCode', { parentName: 'p' }, '--\x3e'),
            ' comment to limit blog post size in the list view.',
          ),
        );
      }
      u.isMDXComponent = !0;
    },
  },
]);
