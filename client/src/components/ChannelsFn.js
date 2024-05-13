export default function ChannelsFn({ channels, HiSpeakerphone }) {
  return (
    <div className="cgs-content">
      {channels.map((channel, index) => (
        <div key={index} className="channel">
          <img src={channel.image} />
          <div className="title">
            <h3>
              <HiSpeakerphone />
              <span>{channel.channel}</span>
            </h3>
            <p>Канал создан</p>
          </div>
        </div>
      ))}
    </div>
  );
}
