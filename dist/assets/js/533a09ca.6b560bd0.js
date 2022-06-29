'use strict';
(self.webpackChunktresdoce_nestjs_toolkit_docs =
  self.webpackChunktresdoce_nestjs_toolkit_docs || []).push([
  [4607],
  {
    3905: (e, t, r) => {
      r.d(t, { Zo: () => u, kt: () => b });
      var n = r(7294);
      function a(e, t, r) {
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
      function o(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? o(Object(r), !0).forEach(function (t) {
                a(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : o(Object(r)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
              });
        }
        return e;
      }
      function i(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              a = {},
              o = Object.keys(e);
            for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          for (n = 0; n < o.length; n++)
            (r = o[n]),
              t.indexOf(r) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]));
        }
        return a;
      }
      var l = n.createContext({}),
        c = function (e) {
          var t = n.useContext(l),
            r = t;
          return e && (r = 'function' == typeof e ? e(t) : s(s({}, t), e)), r;
        },
        u = function (e) {
          var t = c(e.components);
          return n.createElement(l.Provider, { value: t }, e.children);
        },
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children;
            return n.createElement(n.Fragment, {}, t);
          },
        },
        g = n.forwardRef(function (e, t) {
          var r = e.components,
            a = e.mdxType,
            o = e.originalType,
            l = e.parentName,
            u = i(e, ['components', 'mdxType', 'originalType', 'parentName']),
            g = c(r),
            b = a,
            m = g[''.concat(l, '.').concat(b)] || g[b] || p[b] || o;
          return r
            ? n.createElement(m, s(s({ ref: t }, u), {}, { components: r }))
            : n.createElement(m, s({ ref: t }, u));
        });
      function b(e, t) {
        var r = arguments,
          a = t && t.mdxType;
        if ('string' == typeof e || a) {
          var o = r.length,
            s = new Array(o);
          s[0] = g;
          var i = {};
          for (var l in t) hasOwnProperty.call(t, l) && (i[l] = t[l]);
          (i.originalType = e), (i.mdxType = 'string' == typeof e ? e : a), (s[1] = i);
          for (var c = 2; c < o; c++) s[c] = r[c];
          return n.createElement.apply(null, s);
        }
        return n.createElement.apply(null, r);
      }
      g.displayName = 'MDXCreateElement';
    },
    5802: (e, t, r) => {
      r.r(t),
        r.d(t, {
          assets: () => l,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => o,
          metadata: () => i,
          toc: () => c,
        });
      var n = r(7462),
        a = (r(7294), r(3905));
      const o = { sidebar_position: 3 },
        s = 'Create a Blog Post',
        i = {
          unversionedId: 'tutorial-basics/create-a-blog-post',
          id: 'tutorial-basics/create-a-blog-post',
          title: 'Create a Blog Post',
          description:
            'Docusaurus creates a page for each blog post, but also a blog index page, a tag system, an RSS feed...',
          source: '@site/docs/tutorial-basics/create-a-blog-post.md',
          sourceDirName: 'tutorial-basics',
          slug: '/tutorial-basics/create-a-blog-post',
          permalink: '/docs/tutorial-basics/create-a-blog-post',
          draft: !1,
          tags: [],
          version: 'current',
          sidebarPosition: 3,
          frontMatter: { sidebar_position: 3 },
          sidebar: 'tutorialSidebar',
          previous: {
            title: 'Create a Document',
            permalink: '/docs/tutorial-basics/create-a-document',
          },
          next: {
            title: 'Markdown Features',
            permalink: '/docs/tutorial-basics/markdown-features',
          },
        },
        l = {},
        c = [{ value: 'Create your first Post', id: 'create-your-first-post', level: 2 }],
        u = { toc: c };
      function p(e) {
        let { components: t, ...r } = e;
        return (0, a.kt)(
          'wrapper',
          (0, n.Z)({}, u, r, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('h1', { id: 'create-a-blog-post' }, 'Create a Blog Post'),
          (0, a.kt)(
            'p',
            null,
            'Docusaurus creates a ',
            (0, a.kt)('strong', { parentName: 'p' }, 'page for each blog post'),
            ', but also a ',
            (0, a.kt)('strong', { parentName: 'p' }, 'blog index page'),
            ', a ',
            (0, a.kt)('strong', { parentName: 'p' }, 'tag system'),
            ', an ',
            (0, a.kt)('strong', { parentName: 'p' }, 'RSS'),
            ' feed...',
          ),
          (0, a.kt)('h2', { id: 'create-your-first-post' }, 'Create your first Post'),
          (0, a.kt)(
            'p',
            null,
            'Create a file at ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'blog/2021-02-28-greetings.md'),
            ':',
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              {
                parentName: 'pre',
                className: 'language-md',
                metastring: 'title="blog/2021-02-28-greetings.md"',
                title: '"blog/2021-02-28-greetings.md"',
              },
              '---\nslug: greetings\ntitle: Greetings!\nauthors:\n  - name: Joel Marcey\n    title: Co-creator of Docusaurus 1\n    url: https://github.com/JoelMarcey\n    image_url: https://github.com/JoelMarcey.png\n  - name: S\xe9bastien Lorber\n    title: Docusaurus maintainer\n    url: https://sebastienlorber.com\n    image_url: https://github.com/slorber.png\ntags: [greetings]\n---\n\nCongratulations, you have made your first post!\n\nFeel free to play around and edit this post as much you like.\n',
            ),
          ),
          (0, a.kt)(
            'p',
            null,
            'A new blog post is now available at ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'http://localhost:3000/blog/greetings'),
            '.',
          ),
        );
      }
      p.isMDXComponent = !0;
    },
  },
]);
