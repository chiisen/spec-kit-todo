# Constitution Update Checklist

When amending the constitution (`/memory/constitution.md`), ensure all dependent documents are updated to maintain consistency.

## Templates to Update

### When adding/modifying ANY article:
 - [x] `/templates/plan-template.md` - Constitution Check section已更新
 - [x] `/templates/spec-template.md` - requirements/scope已同步
 - [x] `/templates/tasks-template.md` - task types已同步
 - [x] `/.claude/commands/plan.md` - planning process已同步
 - [x] `/.claude/commands/tasks.md` - task generation已同步
 - [x] `/CLAUDE.md` - guidelines已同步

### Article-specific updates:

#### Article I (Library-First):
- [x] Ensure templates emphasize library creation
- [x] Update CLI command examples
- [x] Add llms.txt documentation requirements

#### Article II (CLI Interface):
- [x] Update CLI flag requirements in templates
- [x] Add text I/O protocol reminders

#### Article III (Test-First):
- [x] Update test order in all templates
- [x] Emphasize TDD requirements
- [x] Add test approval gates

#### Article IV (Integration Testing):
- [x] List integration test triggers
- [x] Update test type priorities
- [x] Add real dependency requirements

#### Article V (Observability):
- [x] Add logging requirements to templates
- [x] Include multi-tier log streaming
- [x] Update performance monitoring sections

#### Article VI (Versioning):
- [x] Add version increment reminders
- [x] Include breaking change procedures
- [x] Update migration requirements

#### Article VII (Simplicity):
- [x] Update project count limits
- [x] Add pattern prohibition examples
- [x] Include YAGNI reminders

## Validation Steps

1. **Before committing constitution changes:**
   - [x] All templates reference new requirements
   - [x] Examples updated to match new rules
   - [x] No contradictions between documents

2. **After updating templates:**
   - [x] Run through a sample implementation plan
   - [x] Verify all constitution requirements addressed
   - [x] Check that templates are self-contained (readable without constitution)

3. **Version tracking:**
   - [x] Update constitution version number
   - [x] Note version in template footers
   - [x] Add amendment to constitution history

## Common Misses

Watch for these often-forgotten updates:
- Command documentation (`/commands/*.md`)
- Checklist items in templates
- Example code/commands
- Domain-specific variations (web vs mobile vs CLI)
- Cross-references between documents

## Template Sync Status

Last sync check: 2025-09-17
- Constitution version: 2.1.1
- Templates aligned: ✅ (全部條目已驗證完成)

---

*This checklist ensures the constitution's principles are consistently applied across all project documentation.*