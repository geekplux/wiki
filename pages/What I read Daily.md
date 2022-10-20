alias:: 我每天读了什么

- query-table:: false
  #+BEGIN_QUERY
  {:title "What I read Daily"
   :query [:find (pull ?link [*])
         :where
         [?link :block/parent ?parent]
         [?parent :block/content "## What I read Today"]
         [?parent :block/page ?page]
         [?page :page/journal? true]]
  }
  #+END_QUERY