import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import {
  Shield,
  BookOpen,
  MessageCircle,
  TrendingUp,
  Users,
  TriangleAlert as AlertTriangle,
} from 'lucide-react-native';
import ChatbotButton from '../components/ChatbotButton';
import ChatbotPopup from '../components/ChatbotPopup';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const [isPopupVisible, setPopupVisible] = useState(false);

  const navigateToLearn = () => {
    navigation.navigate('Learn' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <View style={styles.logoContainer}>
              <Shield color="#fff" size={32} />
              <Text style={styles.logoText}>FinGuard</Text>
            </View>
            <View style={styles.navContainer}>
              <TouchableOpacity style={styles.navButton} onPress={navigateToLearn}>
                <BookOpen color="#fff" size={20} />
                <Text style={styles.navButtonText}>Learn</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInButtonText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Protect Your Finances with AI</Text>
          <Text style={styles.heroSubtitle}>
            Advanced fraud detection powered by machine learning. Stay one step
            ahead of financial threats with real-time monitoring and intelligent
            alerts.
          </Text>
          <View style={styles.heroButtons}>
            <TouchableOpacity style={styles.primaryButton}>
              <Text style={styles.primaryButtonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={() => setPopupVisible(true)}
            >
              <MessageCircle color="#0070BA" size={20} />
              <Text style={styles.secondaryButtonText}>Chat with AI Assistant</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          <Text style={styles.sectionTitle}>Comprehensive Fraud Protection</Text>
          <View style={styles.featuresGrid}>
            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <AlertTriangle color="#0070BA" size={24} />
              </View>
              <Text style={styles.featureTitle}>Real-time Monitoring</Text>
              <Text style={styles.featureSubtitle}>
                24/7 transaction monitoring with instant fraud alerts
              </Text>
              <Text style={styles.featureDescription}>
                Our AI system continuously monitors your accounts for suspicious
                activities and sends immediate notifications.
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <TrendingUp color="#0070BA" size={24} />
              </View>
              <Text style={styles.featureTitle}>Smart Analytics</Text>
              <Text style={styles.featureSubtitle}>
                Advanced pattern recognition and risk assessment
              </Text>
              <Text style={styles.featureDescription}>
                Machine learning algorithms analyze spending patterns to
                identify potential fraud before it happens.
              </Text>
            </View>

            <View style={styles.featureCard}>
              <View style={styles.featureIconContainer}>
                <Users color="#0070BA" size={24} />
              </View>
              <Text style={styles.featureTitle}>Expert Support</Text>
              <Text style={styles.featureSubtitle}>
                24/7 fraud specialists and AI assistance
              </Text>
              <Text style={styles.featureDescription}>
                Get instant help from our AI chatbot or connect with fraud
                specialists when you need human expertise.
              </Text>
            </View>
          </View>
        </View>

        {/* CTA Section */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaTitle}>Ready to Secure Your Financial Future?</Text>
          <Text style={styles.ctaSubtitle}>
            Join thousands of users who trust FinGuard to protect their finances
          </Text>
          <TouchableOpacity style={styles.ctaButton}>
            <Text style={styles.ctaButtonText}>Start Free Trial</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 FinGuard. All rights reserved. Protecting your financial
            future with AI.
          </Text>
        </View>
      </ScrollView>

      {/* Floating Chatbot Button */}
      <ChatbotButton onPress={() => setPopupVisible(true)} />

      {/* Popup */}
      <ChatbotPopup
        visible={isPopupVisible}
        onClose={() => setPopupVisible(false)}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    backgroundColor: '#0070BA',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  navButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  navButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  signInButtonText: {
    color: '#0070BA',
    fontSize: 14,
    fontWeight: '600',
  },
  heroSection: {
    backgroundColor: '#f0f8ff',
    paddingVertical: 60,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#1a1a1a',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 44,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 26,
    maxWidth: width - 32,
  },
  heroButtons: {
    flexDirection: 'column',
    gap: 12,
    alignItems: 'center',
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#0070BA',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderWidth: 1,
    borderColor: '#0070BA',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    minWidth: 200,
    justifyContent: 'center',
  },
  secondaryButtonText: {
    color: '#0070BA',
    fontSize: 16,
    fontWeight: '600',
  },
  featuresSection: {
    paddingVertical: 60,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
    color: '#1a1a1a',
  },
  featuresGrid: {
    gap: 24,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  featureIconContainer: {
    width: 48,
    height: 48,
    backgroundColor: '#f0f8ff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  featureSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  featureDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  ctaSection: {
    backgroundColor: '#0070BA',
    paddingVertical: 60,
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaSubtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 32,
    opacity: 0.9,
  },
  ctaButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: '#0070BA',
    fontSize: 16,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#f8f9fa',
    paddingVertical: 32,
    paddingHorizontal: 16,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
  },
  footerText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
  },
});

export default HomeScreen;
