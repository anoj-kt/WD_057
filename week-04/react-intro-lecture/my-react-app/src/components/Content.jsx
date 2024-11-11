const Content = () => {
  const firstPara = 'This is JSX';

  const names = [
    { id: 1, firstName: 'Mathias' },
    { id: 2, firstName: 'Shirin' },
    { id: 3, firstName: 'Matteus' },
    { id: 4, firstName: 'Robin' },
  ];

  return (
    <>
      <h1 className='text-3xl p-2 '>React</h1>
      <p>{firstPara}</p>
      <ul>
        {names.map((name) => {
          return <li key={name.id}>{name.firstName}</li>;
        })}
      </ul>
    </>
  );
};

export default Content;
