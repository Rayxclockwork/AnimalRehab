import React from "react";
import {AppProvider, Page} from '@shopify/polaris';
import MedicineTable from '../MedicineTable/MedicineTable'

class Medicine extends React.Component {
    render() {
        const headings = ['Name', 'Type', 'Indicated for'];
        const rows = [
            [
                'SMZ(Bactrim)',
                'Antibiotic',
                'Used to treat parasitic infections and coccidia, respiratory infections such as bronchitis, urinary tract infections, skin infections, ear infections, gastrointestinal infections, and certain types of diarrhea.',
            ],
            [
                'Clavamox (Augmentin)',
                'Antibiotic',
                'Antibiotic related to penicillin but with a broader spectrum of antibacterial action.Skin and soft tissue infections such as wounds, abscesses, cellulitis, and periodontal infections.',
            ],
            [
                'Baytril',
                'Antibiotic',
                'Abcesses, bone, joints',
            ],
            [
                'Cipro',
                'Antibiotic',
                'Ciprofloxacin:lower respiratory tract infections, skin infections, UTI and other infections. 20-25 mg/kg per day. 1/2 dose every 12 hours. Full dose first application.',
            ],
            [
                'Ciprofloxacin',
                'Antibiotic',
                'Abcesses, bone, joints',
            ],
            [
                'Clindamycin',
                'Antibiotic',
                'Abcesses, bone, joints',
            ],
            [
                'Metronidazole (Flagyl)',
                'Antibiotic',
                'UTI Infections, diarrhea, Giardia, Periodontal disease: Can penetrate the blood/brain barrier so may be used for cans infections. Works against bacteria.',
            ],
            [
                'Dicloxacillin (Cloxaclan)',
                'Antibiotic',
                'Mostly for skin infections.',
            ],
            [
                'Tramadol',
                'Pain Reliever',
                '1-4 mg/kg. Works synergestically with metacam.',
            ],
            [
                'Buprenorphine',
                'Pain Reliever',
                'Pain Management, PO or IM, 0.3mg/ml',
            ],
            [
                'Metacam',
                'Pain Reliever',
                'Pre-mixed liquid: High initial dose (1.0mg/kg) treats inflammation…then taper down after three days to (0.1-0.3 mg/kg) to protect renal function.',
            ],
            [
                'Prednisone',
                'Steroid',
                'Corticosteroid: Addison\'s disease, inflammation, arthritis, allergies, and certain autoimmune diseases. Oral corticosteroids (prednisolone 0.5mg/kg q12hours) may be used for up to 7 days, however there is no proven benefit of long term treatment.',
            ],
            [
                'Prilosec(Omeprazole)',
                'Misc',
                'Gastric and Intestinal Ulcers',
            ],
            [
                'Diphenhydramine (Benadryl)',
                'Antihistamine',
                'Pre-mixed liquid: Childrens Benedryl 12.5mg/5ml',
            ],
            [
                'Dexamethasone (Alin)',
                'Steroid',
                'Pre-mixed liquid: Corticosteroid: allergies, inflammation, Addison\'s disease, certain types of colitis, lupus, acute arthritis, cancers, brain swelling, and many other conditions. Powerful anti-inflammatory.',
            ],
            [
                'Alprazolam (Xanax)',
                'Misc',
                '0.02-0.1 mg/kg   Calming, anti-anxiety fat soluble. Mix with coconut oil or similar.',
            ],
            [
                'Versed (Midazolam)',
                'Misc',
                'Pre-mixed liquid for injection: Preanesthetic/tranquilizer for Incisor reduction. A benzodiazepine 0.3-1.0 mg/kg IM or SQ',
            ],
            [
                'Capstar (Nitenpryam)',
                'Misc',
                'Kills fleas and maggots, PO (can also be diluted and applied direct to maggots)',
            ],
            [
                'Simethicone',
                'Misc',
                'Treat gas/bloating',
            ],
            [
                'Valium (Diazepam)',
                'Misc',
                'Anticonvulsant, 0.5-3mg/kg IM  As needed, 5mg/ml  ',
            ],
            [
                'Vitamin K',
                'Misc',
                'Rodenticide toxicity: 2.5mg/kg once, then 1.1mg/kg SQ then PO BID, up to 6 months due to prolonged effect of 3rd generation rodenticides',
            ],
            [
                'Baycox (Toltrazuril)',
                'Misc',
                'Antiprotozoal for coccidiosis, PO SID for 5 days, 25mg/ml',
            ],
        ];
        return (
            <AppProvider>
                <Page title="Medicine Information">
                    <MedicineTable headings={headings} rows={rows} />
                </Page>
            </AppProvider>
        )
    }
}



export default Medicine;