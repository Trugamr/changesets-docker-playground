

### Relasing a new version

We use [@changesets/cli](https://github.com/changesets/changesets) to manage our releases.

```bash
# Create a new changeset 
pnpm changeset
# Combine changesets and version
pnpm version
# Create git tag for new version
pnpm changeset publish

# Push git tags
git push --tags origin
```

After a new release is created, github tags will be created that will trigger github workflow to build and publish docker image to GitHub Container Registry.