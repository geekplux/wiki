query-table:: false
#+BEGIN_QUERY
{:title "What I read Daily"
 :query [:find (pull ?link [*])
       :where
       [?link :block/parent ?parent]
       [?parent :block/heading-level 2]
       [?parent :block/content "## What I read Today"]
       [?parent :block/page ?page]
       [?page :page/journal? true]]
}
#+END_QUERY
