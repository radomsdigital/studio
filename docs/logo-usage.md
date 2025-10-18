# Leywok Logo Usage Guide

## Logo File Location
The Leywok logo is stored in the `public` directory:
- **Path**: `/public/leywok_logo.png`
- **Format**: PNG with transparency
- **Size**: Optimized for web use

## Logo Component

The logo component is located at `src/components/icons/logo.tsx` and uses Next.js Image optimization.

### Basic Usage

```tsx
import { Logo } from '@/components/icons/logo';

// Default usage (with text)
<Logo />

// Logo only (without text)
<Logo showText={false} />

// Custom height
<Logo height={60} />

// With custom className
<Logo className="my-custom-class" />
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | string | - | Additional CSS classes |
| `showText` | boolean | true | Show "Leywok" text next to logo |
| `height` | number | 40 | Logo height in pixels (width adjusts automatically) |

## Where the Logo is Used

1. **Header** (`src/components/layout/header.tsx`)
   - Displays in the top navigation
   - Includes hover effect for better UX
   - Links back to homepage

2. **Footer** (`src/components/layout/footer.tsx`)
   - Displays in the footer section
   - Maintains brand consistency

## Customization Examples

### Large Logo for Hero Section
```tsx
<Logo height={80} />
```

### Icon Only (No Text)
```tsx
<Logo showText={false} height={32} />
```

### Custom Styling
```tsx
<Logo className="opacity-80 hover:opacity-100 transition-opacity" />
```

## Best Practices

1. **Always use the Logo component** - Don't import the image directly
2. **Use appropriate sizes** - Default (40px) for header, larger for hero sections
3. **Maintain aspect ratio** - The component automatically handles this
4. **Include alt text** - Already handled by the component
5. **Use priority loading** - Enabled by default for above-the-fold usage

## File Specifications

- **Recommended dimensions**: 512x512px or larger (square)
- **Format**: PNG with transparency
- **Color space**: RGB
- **Optimization**: Use next/image automatic optimization

## Updating the Logo

To update the logo:
1. Replace `/public/leywok_logo.png` with your new logo
2. Keep the same filename or update the Logo component
3. Clear Next.js cache: `rm -rf .next`
4. Rebuild the project

---

*Last Updated: October 18, 2025*

