const pickContactButton = document.getElementById('pickContact');
const contactResults = document.getElementById('contactResults');
const apiSupport = document.getElementById('apiSupport');

function checkApiSupport() {
    if ('contacts' in navigator && 'ContactsManager' in window) {
        apiSupport.innerHTML = '<p style="color: green;">✓ Contact Picker API is supported</p>';
        pickContactButton.disabled = false;
    } else {
        apiSupport.innerHTML = '<p style="color: red;">✗ Contact Picker API is not supported in this browser</p>';
        pickContactButton.disabled = true;
    }
}

async function pickContacts() {
    try {
        const props = ['name', 'email', 'tel'];
        const opts = { multiple: true };
        
        const contacts = await navigator.contacts.select(props, opts);
        
        if (contacts.length === 0) {
            contactResults.innerHTML = 'No contacts selected.';
            return;
        }
        
        let html = '<h3>Selected Contacts:</h3>';
        contacts.forEach((contact, index) => {
            html += `<div class="contact-item">
                <h4>Contact ${index + 1}</h4>
                <p><strong>Name:</strong> ${contact.name ? contact.name.join(', ') : 'Not provided'}</p>
                <p><strong>Email:</strong> ${contact.email ? contact.email.join(', ') : 'Not provided'}</p>
                <p><strong>Phone:</strong> ${contact.tel ? contact.tel.join(', ') : 'Not provided'}</p>
            </div>`;
        });
        
        contactResults.innerHTML = html;
        
    } catch (error) {
        contactResults.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        console.error('Contact picker error:', error);
    }
}

pickContactButton.addEventListener('click', pickContacts);

checkApiSupport();