import { DocumentTextIcon, UserIcon } from "@sanity/icons";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

// export const structure = (S) =>
//   S.list().title("Content").items(S.documentTypeListItems());

export const structure = (S) =>
  S.list()
    .title("Studio")
    .items([
      // Content section (everything except blog types)
      S.listItem()
        .title("Portfolio")
        .child(
          S.list()
            .title("Content Documents")
            .items(
              S.documentTypeListItems().filter(
                (listItem) => !["post", "author"].includes(listItem.getId())
              )
            )
        ),

      // Blog section
      S.listItem()
        .title("Blog")
        .icon(DocumentTextIcon)
        .child(
          S.list()
            .title("Blog Documents")
            .items([
              S.documentTypeListItem("post")
                .title("Posts")
                .icon(DocumentTextIcon),
              S.documentTypeListItem("author").title("Authors").icon(UserIcon),
              S.documentTypeListItem("category")
                .title("Categories")
                .icon(DocumentTextIcon),
            ])
        ),

      // Bio/About Me section
      S.listItem()
        .title("About Me")
        .child(S.documentTypeList("aboutMe").title("About Me")),
    ]);
