alias:: 我每天发现了什么

- query-table:: false
  #+BEGIN_QUERY
  {:title "What I found out Daily"
   :query [:find (pull ?block [*])
         :where
         [?block :block/parent ?parent]
         [?parent :block/heading-level 2]
         [?parent :block/content "## Things I found out Today"]
         [?parent :block/page ?page]
         [?page :page/journal? true]]
  }
  #+END_QUERY