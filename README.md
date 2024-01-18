### Creating an automated release

We use [@changesets/cli](https://github.com/changesets/changesets) to manage our releases.

```bash
# Create changeset for a new feature
pnpm changeset
```

After creating a changeset a new pull request will be created automatically using `create-release-pull-request-or-publish.yml` workflow.

Once the pull request is merged, a new release will be created, which will trigger `build-and-publish.yml` workflow to build and publish docker image to GitHub Container Registry. 


### Relasing a new version manually

```bash
# Create a new changeset 
pnpm changeset
# Combine changesets and bump version
pnpm version
# Create git tag for new version
pnpm changeset publish

# Push git tags
git push --tags origin
```

Since `build-and-publish.yml` workflow is only triggered on release creation. We need to manually create a new release from that tag GitHub UI.

If you want to allow publishing images on tag push `build-and-publish.yml` workflow can be updated to use `on.push.tags` as well.

```diff
on:
  release:
    types:
      - published
+  push:
+    tags:
+      - v*
```