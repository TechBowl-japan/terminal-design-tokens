---
"@techtrain/terminal-design-tokens": patch
---

Fix PrimitiveSizeOpacity values from pixel units to proper opacity values

- Fixed opacity values from pixel units (e.g., "10px") to decimal values (e.g., 0.1)
- Implemented custom Style Dictionary transforms to handle opacity tokens correctly
- Added custom transform that prevents "px" units from being added to opacity values
- Migrated from config.json to config.js to enable custom transforms
- This fixes CSS opacity property compatibility issues