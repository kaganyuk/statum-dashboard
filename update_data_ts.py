import json
import os

data_ts_path = '/Users/masya/Downloads/statum-dashboard---личный-кабинет/data.ts'
leads_json_path = '/Users/masya/Downloads/statum-dashboard---личный-кабинет/leads_data.txt'

with open(leads_json_path, 'r') as f:
    leads_data = json.load(f)

with open(data_ts_path, 'r') as f:
    content = f.read()

# Generate the new TypeScript leads array string
leads_ts = 'export const leads: Lead[] = ' + json.dumps(leads_data, indent=2, ensure_ascii=False).replace('null', 'None')
# Wait, let's fix the None back to null/undefined or just let it be null. 
# TypeScript likes null or undefined. The json.dumps output is already null compatible if I don't replace it.
# Actually, the previously failed script was because I tried to use null as a Python keyword.
# json.dumps(..., ensure_ascii=False) will produce null which is correct for TS.

leads_ts = 'export const leads: Lead[] = ' + json.dumps(leads_data, indent=2, ensure_ascii=False) + ';'

# Find the start and end of the leads array in data.ts
start_marker = 'export const leads: Lead[] = ['
end_marker = '];' # This might be tricky if there are multiple ]; but we know leads is the last or one of the last exports.

# Actually, let's find the exact line range. 
# Based on view_file, leads starts at line 237 and ends at line 508.

lines = content.split('\n')
# line numbers are 1-indexed, so index is lines[236] to lines[507]
new_lines = lines[:236] + [leads_ts] + lines[508:]

with open(data_ts_path, 'w') as f:
    f.write('\n'.join(new_lines))
