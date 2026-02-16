
raw_text = """
Freedom Magwaza	SPEED POWER ENTERPRISE	PRIVATE INVESTOR	2	January	19.01	January	Week 4	Elena Smirnova	https://linkedin.com/in/freedom-magwaza-66369b125	Встреча состоялась	13.12 /South Africa / private investors	https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMMepxr1LZY8XjWNrh3zNAakyrGbGeegbPkvQA4NNdlnsv7A
David Susanto	Zia Guild	Guild Master	1	January	19.02	January	Week 4	Roman Vashkevich	https://linkedin.com/in/davidsusanto	Встреча состоялась	13.12 / Indonesia - Malaysia / private investors	https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRyQIMCqtfEBin6CzhflvF0rcXTIwpJaqFM77-Jt1r5m9-uyw
Anshul Agrawal	Imdaad Group	Energy Auditor	1	January	20.01	January	Week 4	Igor Smirnov	https://linkedin.com/in/anshul-agrawal-047a17b3	Встреча состоялась	Singapore - Angel/private investors - 9.10 (linkedIn search)	https://media.licdn.com/dms/image/v2/D4D03AQGfIIcPeIRJMA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1692783087970?e=1770854400&v=beta&t=Ee0VCdmsoL986Nmftt473uW2ON80T0CXtnV1LeH9zBI
Mohammad Jamal	Business Angels of Qatar	Angel Investor	2	January	20.01	January	Week 4	Valentina Pedro	https://linkedin.com/in/mohammad-malek-al-jamal-cfa-45058871	Встреча состоялась		https://media.licdn.com/dms/image/v2/D4D03AQHjTcPQI8LvnA/profile-displayphoto-shrink_800_800/B4DZrPZ47zJcAc-/0/1764416262375?e=1770854400&v=beta&t=B_remayj7v-_WvQUSk6waubH7RkdTdAlQr24W0Kgzyc
Martin Glimmerholm	Self-Employed	Senior advisor – independent	5	January	20.01	January	Week 4	Igor Smirnov	https://linkedin.com/in/martin-glimmerholm-385a5925	Встреча состоялась	21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEL5p6h3upkbMheqBGWasrM78b6lJiMfSEcXYG9Al3AbnjQ
Tshepo Motlhetlhi	Alterra Capital Partners	Private Equity Investor	4	January	20.01	January	Week 4	Roman Vashkevich	https://linkedin.com/in/tshepo-motlhetlhi-55b68a53	Встреча состоялась	13.12 /South Africa / private investors	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpL1H8LPDavG5H8Hn0O8hOI8qYfSdQ0Yfn3JgVsWINJbAhfQ
Ilya Kazakov	D360 Bank	Head of Risk Modeling & Analytics	1	January	21.01	January	Week 4	Igor Smirnov	https://linkedin.com/in/ilyaka	Встреча состоялась	21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer	https://media.licdn.com/dms/image/v2/C4D03AQGGJ96uFUH0hQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1656319869289?e=1770854400&v=beta&t=p4xv9fcgxTlZ6xatDaLIKpaFRnLEVDF4wT4NOrHARRM
Grace Yun Xia	xAI	Investor	3	January	22.01	January	Week 5	Igor Smirnov	https://linkedin.com/in/graceyunxia	Встреча состоялась	Hong Kong - Angel/private investors - 9.10 (linkedIn search)	https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ61RSsxtUHHh-lCrdqYoAJ0IDvVR8yDXBfKWwV8KoJBKi_VA
Chrissy H.	Reimagine X Studio	Investor & Founder & Creative Designer	4	January	22.01	January	Week 5	Roman Vashkevich	https://linkedin.com/in/chrissy-huang	Встреча состоялась	Hong Kong - Angel/private investors - 9.10 (linkedIn search)	no photo
Anwar Al-Yahya	Kuwait Finance House	Executive Manager	3	January	23.01	January	Week 5	Elena Smirnova	https://linkedin.com/in/anwar-hamad-al-yahya-80122826	Встреча состоялась	13.12 / Qatar, Kuwait, Bahrain / private investors	no photo
Aman Kumar Soran	SBI Investment	Venture Capitalist	2	January	14.01	January	Week 4	Igor Smirnov	https://linkedin.com/in/aman-kumar-soran	Встреча состоялась	Japan - Angel/private investors - 9.10 (linkedIn search)	https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSz6d7KlIuXNy-EtR01nEU2XTqBaRhunyd-fAF1SE6ci4x4hQ
Ilya Etko	International Strategic Holding	Chief Strategy Officer	3	January	15.01	January	Week 4	Igor Smirnov	https://linkedin.com/in/ilyaetko	Встреча состоялась	21.10 - Ex-employees of Sberbank, VTB, Alfa-Bank, Gazprombank, Otkritie - formal vs. familiar tone and opinion query vs. direct call offer	https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRtRJtLtDlOFzUhwGxTeLhTxtWSkydAb3kZHBS_7lD5wQTcFA
"""

import json

lines = raw_text.strip().split('\n')
parsed_leads = []
count = 1

for line in lines:
    if not line.strip(): continue
    
    parts = line.split('\t')
    # Pad parts if missing
    if len(parts) < 13:
        parts += [''] * (13 - len(parts))

    name = parts[0].strip()
    company = parts[1].strip()
    role = parts[2].strip()
    quality = parts[3].strip()
    date_scheduled = parts[5].strip() # 19.01
    account = parts[8].strip()
    linkedin = parts[9].strip()
    status = parts[10].strip()
    campaign = parts[11].strip()
    photo = parts[12].strip()

    # ID: w5-l1, w5-l2...
    lead_id = f"w5-l{count}"
    count += 1
    
    # Handle quality
    try:
        q_int = int(quality)
    except:
        q_int = None
        
    lead = {
        "id": lead_id,
        "weekId": "Week 5",
        "name": name,
        "photo": photo if photo and photo != 'no photo' else f"https://ui-avatars.com/api/?name={name.replace(' ', '+')}&background=0D8ABC&color=fff",
        "company": company,
        "role": role,
        "quality": q_int,
        "status": status,
        "dateScheduled": date_scheduled,
        "dateConducted": "February", # Defaulting to February as it is Week 5 context usually, or keep empty? User text says "January" in other cols but dates are late Jan / early Feb.
        # Actually in the text there is a column for "Conducted Month" -> Col 6.
        # Parts: 0=Name, 1=Comp, 2=Role, 3=Qual, 4=SchedMonth, 5=DateSched, 6=CondMonth
        "dateConducted": parts[6].strip() if len(parts) > 6 else "",
        "account": account,
        "linkedin": linkedin,
        "comment": "",
        "campaign": campaign
    }
    parsed_leads.append(lead)

print(json.dumps(parsed_leads, indent=2, ensure_ascii=False))
