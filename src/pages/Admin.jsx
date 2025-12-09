import { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

export default function Admin() {
  const [about, setAbout] = useState({ title: '', content: '' });
  const [tools, setTools] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [contactIntro, setContactIntro] = useState({ intro_text: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Fetch about
    const { data: aboutData } = await supabase.from('about').select('*').single();
    if (aboutData) setAbout(aboutData);

    // Fetch tools
    const { data: toolsData } = await supabase.from('tools').select('*');
    setTools(toolsData || []);

    // Fetch contacts
    const { data: contactsData } = await supabase.from('contacts').select('*');
    setContacts(contactsData || []);

    // Fetch contact intro
    const { data: introData } = await supabase.from('contact_intro').select('*').single();
    if (introData) setContactIntro(introData);
  };

  const updateAbout = async () => {
    await supabase.from('about').upsert(about);
    alert('About updated!');
  };

  const addTool = async (tool) => {
    await supabase.from('tools').insert(tool);
    fetchData();
  };

  const updateTool = async (id, tool) => {
    await supabase.from('tools').update(tool).eq('id', id);
    fetchData();
  };

  const deleteTool = async (id) => {
    await supabase.from('tools').delete().eq('id', id);
    fetchData();
  };

  const addContact = async (contact) => {
    await supabase.from('contacts').insert(contact);
    fetchData();
  };

  const updateContact = async (id, contact) => {
    await supabase.from('contacts').update(contact).eq('id', id);
    fetchData();
  };

  const deleteContact = async (id) => {
    await supabase.from('contacts').delete().eq('id', id);
    fetchData();
  };

  const updateContactIntro = async () => {
    await supabase.from('contact_intro').upsert(contactIntro);
    alert('Contact intro updated!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CMS Admin</h1>

      {/* About Section */}
      <section>
        <h2>About Me</h2>
        <input
          type="text"
          placeholder="Title"
          value={about.title}
          onChange={(e) => setAbout({ ...about, title: e.target.value })}
        />
        <textarea
          placeholder="Content"
          value={about.content}
          onChange={(e) => setAbout({ ...about, content: e.target.value })}
        />
        <button onClick={updateAbout}>Update About</button>
      </section>

      {/* Tools Section */}
      <section>
        <h2>Tools</h2>
        {tools.map((tool) => (
          <div key={tool.id}>
            <input
              type="text"
              value={tool.name}
              onChange={(e) => updateTool(tool.id, { ...tool, name: e.target.value })}
            />
            <input
              type="text"
              value={tool.description}
              onChange={(e) => updateTool(tool.id, { ...tool, description: e.target.value })}
            />
            <input
              type="text"
              value={tool.icon_url}
              onChange={(e) => updateTool(tool.id, { ...tool, icon_url: e.target.value })}
            />
            <button onClick={() => deleteTool(tool.id)}>Delete</button>
          </div>
        ))}
        <button onClick={() => addTool({ name: '', description: '', icon_url: '' })}>Add Tool</button>
      </section>

      {/* Contacts Section */}
      <section>
        <h2>Contacts</h2>
        {contacts.map((contact) => (
          <div key={contact.id}>
            <input
              type="text"
              value={contact.type}
              onChange={(e) => updateContact(contact.id, { ...contact, type: e.target.value })}
            />
            <input
              type="text"
              value={contact.value}
              onChange={(e) => updateContact(contact.id, { ...contact, value: e.target.value })}
            />
            <input
              type="text"
              value={contact.icon_url}
              onChange={(e) => updateContact(contact.id, { ...contact, icon_url: e.target.value })}
            />
            <button onClick={() => deleteContact(contact.id)}>Delete</button>
          </div>
        ))}
        <button onClick={() => addContact({ type: '', value: '', icon_url: '' })}>Add Contact</button>
      </section>

      {/* Contact Intro */}
      <section>
        <h2>Contact Intro</h2>
        <textarea
          placeholder="Intro text"
          value={contactIntro.intro_text}
          onChange={(e) => setContactIntro({ ...contactIntro, intro_text: e.target.value })}
        />
        <button onClick={updateContactIntro}>Update Intro</button>
      </section>
    </div>
  );
}
