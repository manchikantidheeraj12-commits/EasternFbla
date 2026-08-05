document.addEventListener('DOMContentLoaded', () => {
  const faqData = [
    {
      question: 'What is FBLA?',
      answer: 'FBLA is an organization for students interested in business, leadership, and career development through competitions, community service, and chapter activities.'
    },
    {
      question: 'How do I join FBLA?',
      answer: 'Join by contacting your chapter advisor or using the chapter membership form. Many chapters ask students to attend an introductory meeting and complete a membership application.'
    },
    {
      question: 'What programs does FBLA offer?',
      answer: 'FBLA offers leadership workshops, competitive event preparation, community service projects, and mentorship activities for student members.'
    },
    {
      question: 'What are FBLA competitive events?',
      answer: 'Competitive events are business-related contests in areas like public speaking, marketing, finance, entrepreneurship, and technology, with regional, state, and national competitions.'
    },
    {
      question: 'Why join FBLA?',
      answer: 'Joining FBLA helps students build leadership skills, gain professional experience, connect with peers, and prepare for business careers.'
    },
    {
      question: 'How can I contact FBLA leadership?',
      answer: 'Use the chapter email listed on the site or reach out to your school advisor for the best contact information.'
    },
    {
      question: 'What is the chapter newsletter for?',
      answer: 'The newsletter shares event updates, meeting details, member highlights, and important deadlines for chapter activities.'
    }
  ];

  const faqList = document.getElementById('faqList');
  const questionInput = document.getElementById('questionInput');
  const form = document.getElementById('qa-search');

  function renderFaq(results) {
    if (!faqList) return;
    faqList.innerHTML = results.map(item => `
      <article class="qa-item">
        <h4>${item.question}</h4>
        <p>${item.answer}</p>
      </article>
    `).join('');
  }

  function searchFaq(query) {
    if (!query) return faqData;
    const normalized = query.toLowerCase();
    return faqData.filter(item =>
      item.question.toLowerCase().includes(normalized) ||
      item.answer.toLowerCase().includes(normalized)
    );
  }

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const query = questionInput ? questionInput.value.trim() : '';
      const results = searchFaq(query);
      renderFaq(results);
    });
  }

  renderFaq(faqData);

  const y = new Date().getFullYear();
  const yEl = document.getElementById('year-ask');
  if (yEl) yEl.textContent = y;
});
