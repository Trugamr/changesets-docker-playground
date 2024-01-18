

### Relasing a new version

We use [@changesets/cli](https://github.com/changesets/changesets) to manage our releases.

```bash
# Create a new changeset and version
pnpm changeset
pnpm version

# Since we are not publishing to npm, we need to manually create a git tag
pnpm changeset tag

# Push git tags
git push --tags origin
```

After a new release is created, github tags will be created that will trigger github workflow to build and publish docker image to GitHub Container Registry.