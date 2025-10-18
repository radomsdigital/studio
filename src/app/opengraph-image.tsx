import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Leywok - Post a Task, Get It Done';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'stretch',
          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #1e3a8a 100%)',
          position: 'relative',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            top: '-100px',
            right: '-100px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.1)',
            bottom: '-80px',
            left: '-80px',
          }}
        />

        {/* Left Section - Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
            zIndex: 2,
          }}
        >
          {/* Logo Text */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 900,
              color: 'white',
              marginBottom: '40px',
              letterSpacing: '-2px',
            }}
          >
            Leywok
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: 56,
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.2,
              marginBottom: '20px',
              margin: 0,
            }}
          >
            Post a Task,
            <br />
            Get It Done.
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: 28,
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.4,
              marginBottom: '30px',
              margin: '20px 0 30px 0',
            }}
          >
            Connect with skilled professionals for any service
          </p>

          {/* Features */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                ✓
              </div>
              <span style={{ color: 'white', fontSize: '20px' }}>
                Verified Professionals
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                ✓
              </div>
              <span style={{ color: 'white', fontSize: '20px' }}>
                Secure Payments
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                ✓
              </div>
              <span style={{ color: 'white', fontSize: '20px' }}>
                Satisfaction Guaranteed
              </span>
            </div>
          </div>

          {/* URL */}
          <div
            style={{
              marginTop: '40px',
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: '600',
            }}
          >
            leywok.com
          </div>
        </div>

        {/* Right Section - Image overlay effect */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            position: 'relative',
            background: 'rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Gradient overlay */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(90deg, rgba(37, 99, 235, 0.8) 0%, rgba(37, 99, 235, 0) 100%)',
              zIndex: 1,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

