
import json
import re

# The new leads for Week 5
new_week5_leads = [
  {
    "id": "w5-l1",
    "weekId": "Week 5",
    "name": "Freedom Magwaza",
    "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMMepxr1LZY8XjWNrh3zNAakyrGbGeegbPkvQA4NNdlnsv7A",
    "company": "SPEED POWER ENTERPRISE",
    "role": "PRIVATE INVESTOR",
    "quality": 2,
    "status": "Встреча состоялась",
    "dateScheduled": "19.01",
    "dateConducted": "January",
    "account": "Elena Smirnova",
    "linkedin": "https://linkedin.com/in/freedom-magwaza-66369b125",
    "comment": "",
    "campaign": "13.12 /South Africa / private investors"
  },
  {
    "id": "w5-l2",
    "weekId": "Week 5",
    "name": "David Susanto",
    "photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyQIMCqtfEBin6CzhflvF0rcXTIwpJaqFM77-Jt1r5m9-uyw",
    "company": "Zia Guild",
    "role": "Guild Master",
    "quality": 1,
    "status": "Встреча состоялась",
    "dateScheduled": "19.02",
    "dateConducted": "January",
    "account": "Roman Vashkevich",
    "linkedin": "https://linkedin.com/in/davidsusanto",
    "comment": "",
    "campaign": "13.12 / Indonesia - Malaysia / private investors"
  },
  {
    "id": "w5-l3",
    "weekId": "Week 5",
    "name": "Anshul Agrawal",
    "photo": "https://media.licdn.com/dms/image/v2/D4D03AQGfIIcPeIRJMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692783087970?e=1770854400&v=beta&t=Ee0VCdmsoL986Nmftt473uW2ON80T0CXtnV1LeH9zBI",
    "company": "Imdaad Group",
    "role": "Energy Auditor",
    "quality": 1,
    "status": "Встреча состоялась",
    "dateScheduled": "20.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/anshul-agrawal-047a17b3",
    "comment": "",
    "campaign": "Singapore - Angel/private investors - 9.10 (linkedIn search)"
  },
  {
    "id": "w5-l4",
    "weekId": "Week 5",
    "name": "Mohammad Jamal",
    "photo": "https://media.licdn.com/dms/image/v2/D4D03AQHjTcPQI8LvnA/profile-displayphoto-shrink_800_800/B4DZrPZ47zJcAc-/0/1764416262375?e=1770854400&v=beta&t=B_remayj7v-_WvQUSk6waubH7RkdTdAlQr24W0Kgzyc",
    "company": "Business Angels of Qatar",
    "role": "Angel Investor",
    "quality": 2,
    "status": "Встреча состоялась",
    "dateScheduled": "20.01",
    "dateConducted": "January",
    "account": "Valentina Pedro",
    "linkedin": "https://linkedin.com/in/mohammad-malek-al-jamal-cfa-45058871",
    "comment": "",
    "campaign": ""
  },
  {
    "id": "w5-l5",
    "weekId": "Week 5",
    "name": "Martin Glimmerholm",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEL5p6h3upkbMheqBGWasrM78b6lJiMfSEcXYG9Al3AbnjQ",
    "company": "Self-Employed",
    "role": "Senior advisor – independent",
    "quality": 5,
    "status": "Встреча состоялась",
    "dateScheduled": "20.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/martin-glimmerholm-385a5925",
    "comment": "",
    "campaign": "21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer"
  },
  {
    "id": "w5-l6",
    "weekId": "Week 5",
    "name": "Tshepo Motlhetlhi",
    "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpL1H8LPDavG5H8Hn0O8hOI8qYfSdQ0Yfn3JgVsWINJbAhfQ",
    "company": "Alterra Capital Partners",
    "role": "Private Equity Investor",
    "quality": 4,
    "status": "Встреча состоялась",
    "dateScheduled": "20.01",
    "dateConducted": "January",
    "account": "Roman Vashkevich",
    "linkedin": "https://linkedin.com/in/tshepo-motlhetlhi-55b68a53",
    "comment": "",
    "campaign": "13.12 /South Africa / private investors"
  },
  {
    "id": "w5-l7",
    "weekId": "Week 5",
    "name": "Ilya Kazakov",
    "photo": "https://media.licdn.com/dms/image/v2/C4D03AQGGJ96uFUH0hQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656319869289?e=1770854400&v=beta&t=p4xv9fcgxTlZ6xatDaLIKpaFRnLEVDF4wT4NOrHARRM",
    "company": "D360 Bank",
    "role": "Head of Risk Modeling & Analytics",
    "quality": 1,
    "status": "Встреча состоялась",
    "dateScheduled": "21.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/ilyaka",
    "comment": "",
    "campaign": "21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer"
  },
  {
    "id": "w5-l8",
    "weekId": "Week 5",
    "name": "Grace Yun Xia",
    "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ61RSsxtUHHh-lCrdqYoAJ0IDvVR8yDXBfKWwV8KoJBKi_VA",
    "company": "xAI",
    "role": "Investor",
    "quality": 3,
    "status": "Встреча состоялась",
    "dateScheduled": "22.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/graceyunxia",
    "comment": "",
    "campaign": "Hong Kong - Angel/private investors - 9.10 (linkedIn search)"
  },
  {
    "id": "w5-l9",
    "weekId": "Week 5",
    "name": "Chrissy H.",
    "photo": "https://ui-avatars.com/api/?name=Chrissy+H.&background=0D8ABC&color=fff",
    "company": "Reimagine X Studio",
    "role": "Investor & Founder & Creative Designer",
    "quality": 4,
    "status": "Встреча состоялась",
    "dateScheduled": "22.01",
    "dateConducted": "January",
    "account": "Roman Vashkevich",
    "linkedin": "https://linkedin.com/in/chrissy-huang",
    "comment": "",
    "campaign": "Hong Kong - Angel/private investors - 9.10 (linkedIn search)"
  },
  {
    "id": "w5-l10",
    "weekId": "Week 5",
    "name": "Anwar Al-Yahya",
    "photo": "https://ui-avatars.com/api/?name=Anwar+Al-Yahya&background=0D8ABC&color=fff",
    "company": "Kuwait Finance House",
    "role": "Executive Manager",
    "quality": 3,
    "status": "Встреча состоялась",
    "dateScheduled": "23.01",
    "dateConducted": "January",
    "account": "Elena Smirnova",
    "linkedin": "https://linkedin.com/in/anwar-hamad-al-yahya-80122826",
    "comment": "",
    "campaign": "13.12 / Qatar, Kuwait, Bahrain / private investors"
  },
  {
    "id": "w5-l11",
    "weekId": "Week 5",
    "name": "Aman Kumar Soran",
    "photo": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSz6d7KlIuXNy-EtR01nEU2XTqBaRhunyd-fAF1SE6ci4x4hQ",
    "company": "SBI Investment",
    "role": "Venture Capitalist",
    "quality": 2,
    "status": "Встреча состоялась",
    "dateScheduled": "14.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/aman-kumar-soran",
    "comment": "",
    "campaign": "Japan - Angel/private investors - 9.10 (linkedIn search)"
  },
  {
    "id": "w5-l12",
    "weekId": "Week 5",
    "name": "Ilya Etko",
    "photo": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtRJtLtDlOFzUhwGxTeLhTxtWSkydAb3kZHBS_7lD5wQTcFA",
    "company": "International Strategic Holding",
    "role": "Chief Strategy Officer",
    "quality": 3,
    "status": "Встреча состоялась",
    "dateScheduled": "15.01",
    "dateConducted": "January",
    "account": "Igor Smirnov",
    "linkedin": "https://linkedin.com/in/ilyaetko",
    "comment": "",
    "campaign": "21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer"
  }
]

file_path = '/Users/masya/Downloads/statum-dashboard---личный-кабинет/data.ts'

with open(file_path, 'r') as f:
    content = f.read()

# Locate the leads array safely
start_pattern = 'export const leads: Lead[] = '
start_idx = content.find(start_pattern)

if start_idx == -1:
    print("Could not find leads array")
    exit(1)

# Find the end of the array. It assumes JSON format so brackets match, AND it ends with a semicolon.
# Since we know `data.ts` ends the file with this array, we can look for the last semicolon.
end_idx = content.rfind(';')
json_str = content[start_idx + len(start_pattern):end_idx]

try:
    current_leads = json.loads(json_str)
except json.JSONDecodeError as e:
    print(f"Failed to decode JSON: {e}")
    # debug: print partial string
    # print(json_str[:100])
    exit(1)

# Filter logic
names_to_remove = set([l['name'] for l in new_week5_leads])
filtered_leads = []

for lead in current_leads:
    # Remove if it's the old Week 5
    if lead['weekId'] == 'Week 5':
        continue
    # Remove if name matches new list (move/duplicate prevention)
    if lead['name'] in names_to_remove:
        continue
    filtered_leads.append(lead)

# Append new leads
updated_leads = filtered_leads + new_week5_leads

# Convert back to JSON string
new_json_str = json.dumps(updated_leads, indent=2, ensure_ascii=False)

# Reconstruct file
new_content = content[:start_idx + len(start_pattern)] + new_json_str + content[end_idx:]

with open(file_path, 'w') as f:
    f.write(new_content)

print("Successfully updated Week 5 leads in data.ts")
