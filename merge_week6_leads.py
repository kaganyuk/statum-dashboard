
import json
import re

# Load parsed Week 6 leads
with open('week6_leads.json', 'r') as f:
    new_week6_leads = json.load(f)

file_path = '/Users/masya/Downloads/statum-dashboard---личный-кабинет/data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Locate the leads array safely
start_pattern = 'export const leads: Lead[] = '
start_idx = content.find(start_pattern)

if start_idx == -1:
    print("Could not find leads array")
    exit(1)

end_idx = content.rfind(';')
json_str = content[start_idx + len(start_pattern):end_idx]

try:
    current_leads = json.loads(json_str)
except json.JSONDecodeError as e:
    print(f"Failed to decode JSON: {e}")
    exit(1)

# Filter logic
names_to_remove = set([l['name'] for l in new_week6_leads])
filtered_leads = []

for lead in current_leads:
    # Remove if it's the old Week 6
    if lead['weekId'] == 'Week 6':
        continue
    # Remove if name matches new list (move/duplicate prevention)
    if lead['name'] in names_to_remove:
        continue
    filtered_leads.append(lead)

# Append new leads
updated_leads = filtered_leads + new_week6_leads

# Convert back to JSON string
new_json_str = json.dumps(updated_leads, indent=2, ensure_ascii=False)

# Reconstruct file
new_content = content[:start_idx + len(start_pattern)] + new_json_str + content[end_idx:]

with open(file_path, 'w') as f:
    f.write(new_content)

print(f"Successfully updated Week 6 leads in data.ts. Total leads: {len(updated_leads)}")
