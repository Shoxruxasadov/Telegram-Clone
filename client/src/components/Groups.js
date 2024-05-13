export default function GroupsFn({ groups, RiGroupFill }) {
  return (
    <div className="cgs-content">
      {groups.map((group, index) => (
        <div key={index} className="group">
          <img src={group.image} />
          <div className="title">
            <h3>
              <RiGroupFill />
              <span>{group.group}</span>
            </h3>
            <p>Группа создан</p>
          </div>
        </div>
      ))}
    </div>
  );
}
